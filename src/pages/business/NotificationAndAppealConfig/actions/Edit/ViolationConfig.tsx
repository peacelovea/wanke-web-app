import type { FormInstance, FormItemProps } from 'antd';
import { Card, Form, Input } from 'antd';
import ConditionsForm from '@/pages/business/NotificationAndAppealConfig/components/ConditionsForm';
import { ViolationConfigRadio } from '@/components/selectors/ViolationSelector';
import { ViolationTypeConfigEnum } from '@/scripts/enum';

interface AppealConfigProps extends FormItemProps {
  form: FormInstance;
}

const ViolationConfig = ({ form, ...props }: AppealConfigProps) => {
  return (
    <Card title="是否记录违规日志（数据层面）" style={{ marginTop: 10 }}>
      <Form.Item name="violation_record_type">
        <ViolationConfigRadio />
      </Form.Item>
      <Form.Item noStyle shouldUpdate>
        {() => {
          return (
            <>
              <Form.Item
                shouldUpdate={(prevValues, nextValues) =>
                  prevValues.violation_record_type !== nextValues.violation_record_type
                }
                noStyle
              >
                {() => {
                  const { getFieldValue } = form;
                  const violationType = getFieldValue('violation_record_type');
                  if (
                    [
                      ViolationTypeConfigEnum.ConditionalNotRecord,
                      ViolationTypeConfigEnum.ConditionalRecord,
                    ].includes(violationType)
                  ) {
                    return <ConditionsForm formName="violation_record_factors" form={form} />;
                  }
                  return null;
                }}
              </Form.Item>
              <Form.Item shouldUpdate noStyle>
                {() => {
                  const { getFieldValue } = form;
                  const conditionList = getFieldValue('violation_record_factors');
                  if (
                    conditionList?.length &&
                    // 当选择「全部不可申诉/不记违规」时，不需要输入框。
                    getFieldValue('violation_record_type') !==
                      ViolationTypeConfigEnum.BothNotRecord &&
                    getFieldValue('violation_record_type') !== ViolationTypeConfigEnum.BothRecord
                  )
                    return (
                      <Form.Item
                        name="violation_record_condition"
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
            </>
          );
        }}
      </Form.Item>
    </Card>
  );
};

export default ViolationConfig;
