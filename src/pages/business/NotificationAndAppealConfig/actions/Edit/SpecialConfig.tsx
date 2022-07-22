import type { FormInstance, FormItemProps } from 'antd';
import { Card, Form, Input } from 'antd';
import ConditionsForm from '@/pages/business/NotificationAndAppealConfig/components/ConditionsForm';

interface SpecialConfigProps extends FormItemProps {
  form: FormInstance;
  title: string;
}

const SpecialConfig = ({ form, title, ...props }: SpecialConfigProps) => {
  return (
    <Card title={title} style={{ marginTop: 10 }}>
      <Form.Item shouldUpdate noStyle>
        <ConditionsForm formName="special_notify_factors" form={form} />
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {() => {
          const { getFieldValue } = form;
          const conditionList = getFieldValue('special_notify_factors');

          if (conditionList?.length)
            return (
              <Form.Item
                name="special_notify_condition"
                label="条件组合"
                rules={[{ required: true }]}
                {...props}
              >
                <Input width={300} />
              </Form.Item>
            );
          return null;
        }}
      </Form.Item>
    </Card>
  );
};

export default SpecialConfig;
