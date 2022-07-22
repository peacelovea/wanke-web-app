import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import type { FormInstance } from 'antd';
import { Button, Col, Form, Input, Row } from 'antd';
import { JumpTypeEnum } from '@/scripts/enum';
import TemplateTypeSelector from '@/components/selectors/TemplateTypeSelector';
import ReceiverSelector from '@/components/selectors/ReceiverSelector';
import JumpTypeSelector from '@/components/selectors/JumpTypeSelector';
import { LinkOutlined } from '@ant-design/icons';

export interface FormPanelRefs {
  setFieldsValue?: (data: any) => void;
  validateFields: (values: any) => any;
  resetFields: () => any;
  form?: FormInstance;
}

interface FormPanelProps {
  type?: 'create' | 'edit' | 'view';
  onFinish?: (val: any) => void;
  goBack?: () => void;
}

const { TextArea } = Input;

const FormPanel: ForwardRefRenderFunction<FormPanelRefs, FormPanelProps> = (
  { type = 'create', onFinish, goBack }: FormPanelProps,
  ref,
) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    setFieldsValue: (data: any) => form.setFieldsValue(data),
    validateFields: (values: any) => form.validateFields(values),
    resetFields: () => form.resetFields(),
    form,
  }));

  const labelCol = { span: 3 };
  const wrapperCol = type === 'create' ? { span: 8 } : undefined;

  const horizontalLabelCol = { span: 6 };
  const horizontalWrapperCol = { span: 16 };

  return (
    <Form
      form={form}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      onFinish={onFinish}
      initialValues={{ jump_type: JumpTypeEnum.site }}
      disabled={type === 'view'}
    >
      <h3>基础信息</h3>
      <Form.Item name="template_name" label="通知模板名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Row>
        <Col span={12}>
          <Form.Item
            labelCol={horizontalLabelCol}
            wrapperCol={horizontalWrapperCol}
            name="template_type"
            label="模板属性"
            rules={[{ required: true }]}
          >
            <TemplateTypeSelector />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            labelCol={horizontalLabelCol}
            wrapperCol={horizontalWrapperCol}
            name="receiver_type"
            label="接受者"
            rules={[{ required: true }]}
          >
            <ReceiverSelector />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="memo" label="备注信息">
        <TextArea placeholder="描述该通知的用途或发送时机" autoSize />
      </Form.Item>
      <Row style={{ marginBottom: 10, alignItems: 'baseline' }}>
        <Col>
          <h3>消息详情（将发送给用户）</h3>
        </Col>
        <Col>
          <LinkOutlined style={{ color: '#08979c' }} />
        </Col>
        <Col>
          <a
            type="link"
            target="_blank"
            href="https://wiki.in.zhihu.com/pages/viewpage.action?pageId=326325693"
          >
            点我查询可使用的占位符
          </a>
        </Col>
      </Row>
      <Form.Item name="msg_title" label="消息标题" rules={[{ required: true, max: 20 }]}>
        <Input />
      </Form.Item>
      <Form.Item name="msg_sub_title" label="消息副标题" rules={[{ required: true, max: 40 }]}>
        <Input />
      </Form.Item>
      <Form.Item name="jump_type" label="点击跳转页" rules={[{ required: true }]}>
        <JumpTypeSelector />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, nextValues) => prevValues.jump_typ !== nextValues.jump_type}
      >
        {(fm: FormInstance) => {
          const { getFieldValue } = fm;
          const type = getFieldValue('jump_type');
          if (type === JumpTypeEnum.costumeDetail) {
            return (
              <Form.Item name="msg_detail" label="消息页详情" rules={[{ required: true }]}>
                <TextArea placeholder="请输入 1000 个字以内" autoSize />
              </Form.Item>
            );
          }
          if (type === JumpTypeEnum.costumeLink) {
            return (
              <Form.Item name="msg_detail" label="url 链接" rules={[{ required: true }]}>
                <Input placeholder="请输入 url 链接， 用户点击后将直接跳转该页面" />
              </Form.Item>
            );
          }
          return null;
        }}
      </Form.Item>
      {type !== 'view' && (
        <Form.Item wrapperCol={{ span: 18, offset: 10 }}>
          <Button className="mg-r" onClick={() => goBack?.()}>
            返回
          </Button>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default forwardRef(FormPanel);
