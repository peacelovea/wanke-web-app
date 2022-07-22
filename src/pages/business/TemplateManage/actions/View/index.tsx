import { useEffect, useRef, useState } from 'react';
import type { FormPanelRefs } from '@/pages/business/TemplateManage/components/FormPanel';
import { Modal } from 'antd';
import { useRequest } from 'umi';
import { fetchTemplateDetail } from '@/services/template';
import { history } from '@@/core/history';
import FormPanel from '@/pages/business/TemplateManage/components/FormPanel';
import { useAccess } from '@@/plugin-access/access';

interface ViewProps {
  id: number;
}

const View = ({ id }: ViewProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const formRef = useRef<FormPanelRefs>(null);

  const { accessButtonFilter } = useAccess();

  const { form } = formRef?.current || {};

  const handleCancel = () => {
    setVisible(false);
  };

  const { run } = useRequest(fetchTemplateDetail, {
    manual: true,
    onSuccess: (res) => {
      if (res) {
        form?.setFieldsValue(res);
      }
    },
  });

  useEffect(() => {
    if (id && visible) {
      run(id);
    }
  }, [visible, id]);

  return (
    <>
      <a href="#" onClick={() => setVisible(true)}>
        查看
      </a>
      <Modal
        visible={visible}
        title="查看"
        width={900}
        onCancel={handleCancel}
        forceRender={true}
        maskClosable={false}
        okText="去编辑"
        okButtonProps={{ hidden: !accessButtonFilter('/business/template-manage:edit') }}
        cancelText="关闭"
        onOk={() => history.push(`/business/template-manage/edit/${id}`)}
      >
        <FormPanel ref={formRef} type="view" />
      </Modal>
    </>
  );
};

export default View;
