import ActionsSelector from '@/components/selectors/ActionsSelector';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-table';
import { Form, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { history } from 'umi';
import PermissionButton from '@/components/PermissionButton';

const Create = ({ actionRef, ...props }: { actionRef?: ActionType }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [form] = useForm();

  const handleOk = () => {
    const { validateFields } = form;

    validateFields(['actions']).then(async (values) => {
      const { actions } = values;
      history.push(`/business/notification-appeal-config/edit/${actions}?isEdit=false`);
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <PermissionButton
        componentType="button"
        type="primary"
        accessId="/business/notification-appeal-config:add"
        onClick={() => setVisible(true)}
      >
        <PlusOutlined />
        新建
      </PermissionButton>
      <Modal
        visible={visible}
        title="新增配置"
        width={600}
        onOk={handleOk}
        okText="创建"
        onCancel={handleCancel}
        closable={false}
        afterClose={() => form.resetFields()}
        {...props}
      >
        <Form form={form}>
          <Form.Item
            name="actions"
            label="操作名称"
            rules={[{ required: true, message: '请选择操作' }]}
          >
            <ActionsSelector type="unconfigured" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Create;
