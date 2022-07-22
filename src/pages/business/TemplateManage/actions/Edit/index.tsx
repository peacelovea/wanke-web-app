import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, message } from 'antd';
import { useRequest } from 'umi';
import { fetchTemplateDetail, updateTemplate } from '@/services/template';
import { history, useParams } from 'umi';
import type { FormPanelRefs } from '@/pages/business/TemplateManage/components/FormPanel';
import FormPanel from '@/pages/business/TemplateManage/components/FormPanel';
import { useEffect, useRef, useState } from 'react';

function Edit() {
  const { id } = useParams<Record<string, string>>();
  const formRef = useRef<FormPanelRefs>(null);
  const { form } = formRef?.current || {};
  const [data, setData] = useState();

  const handleGoBack = () => history.push('/business/template-manage');

  const { loading } = useRequest(() => fetchTemplateDetail(Number(id)), {
    manual: false,
    onSuccess: (res) => {
      if (res) {
        setData(res);
      }
    },
  });

  const { run } = useRequest(updateTemplate, { manual: true });

  const handleFinish = async (values: any) => {
    if (values) {
      await run({ id: Number(id), ...values });
      message.success('编辑成功');
      handleGoBack();
    }
  };

  useEffect(() => {
    form?.setFieldsValue(data);
  }, [data]);

  return (
    <PageHeaderWrapper>
      <Card bordered={false} title={false} loading={loading}>
        <FormPanel type="edit" ref={formRef} onFinish={handleFinish} goBack={handleGoBack} />
      </Card>
    </PageHeaderWrapper>
  );
}

export default Edit;
