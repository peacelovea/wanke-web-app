import type { FormInstance } from 'antd';
import { Form, Space } from 'antd';
import NotificationDefaultConfigSelector from '@/components/selectors/NotificationDefaultConfigSelector';
import { NotificationDefaultConfigEnum, OnlineStatusEnum, ReceiverTypeEnum } from '@/scripts/enum';
import TemplateSelector from '@/components/selectors/TemplateSelector';
import { RECEIVER_TYPE_OPTIONS } from '@/scripts/options';

export const templatInitialValues = [
  {
    receiver_type: ReceiverTypeEnum.beDisposer,
    default_notify_action: NotificationDefaultConfigEnum.NoNotify,
    template_id: '',
  },
  {
    receiver_type: ReceiverTypeEnum.reporter,
    default_notify_action: NotificationDefaultConfigEnum.NoNotify,
    template_id: '',
  },
];
const TemplatesConfigForm = ({ form }: { form: FormInstance }) => {
  return (
    <Form.List name="templates" initialValue={templatInitialValues}>
      {(fields) =>
        fields.map((field, index) => {
          const type = form.getFieldValue(['templates'])[index]?.receiver_type;

          return (
            <Space key={`${field.key}-${index}`} align="start" style={{ width: '100%' }}>
              <Form.Item {...field} name={'receiver_type'} style={{ width: 60 }}>
                <strong>{RECEIVER_TYPE_OPTIONS.get(type)}</strong>
              </Form.Item>
              <Form.Item
                {...field}
                name={[field.name, 'default_notify_action']}
                rules={[{ required: true }]}
              >
                <NotificationDefaultConfigSelector />
              </Form.Item>
              <Form.Item noStyle shouldUpdate>
                {() => {
                  const config = form.getFieldValue(['templates'])[index]?.default_notify_action;
                  const receiveType = form.getFieldValue(['templates'])[index]?.receiver_type;

                  if (config === NotificationDefaultConfigEnum.NoNotify) return null;
                  return (
                    <Form.Item
                      {...field}
                      name={[field.name, 'template_id']}
                      rules={[{ required: true }]}
                      label="通知模板"
                    >
                      <TemplateSelector
                        templateStatus={OnlineStatusEnum.online}
                        templateReceiveType={receiveType}
                        style={{ width: 500 }}
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
            </Space>
          );
        })
      }
    </Form.List>
  );
};

export default TemplatesConfigForm;
