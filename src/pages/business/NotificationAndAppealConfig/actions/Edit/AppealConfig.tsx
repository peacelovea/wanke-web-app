import type { FormInstance, FormItemProps } from 'antd';
import { Card, Form, Input } from 'antd';
import ConditionsForm from '@/pages/business/NotificationAndAppealConfig/components/ConditionsForm';
import { AppealsConfigRadio } from '@/components/selectors/AppealConfigSelector';
import { AppealTypeConfigEnum } from '@/scripts/enum';

interface AppealConfigProps extends FormItemProps {
  form: FormInstance;
}

const AppealConfig = ({ form, ...props }: AppealConfigProps) => {
  return (
    <Card title="发通知给「被处置者」后，「可申诉」的条件" style={{ marginTop: 10 }}>
      <Form.Item name="appeal_type">
        <AppealsConfigRadio />
      </Form.Item>
      <Form.Item noStyle shouldUpdate>
        {() => {
          return (
            <>
              <Form.Item
                shouldUpdate={(prevValues, nextValues) =>
                  prevValues.appeal_type !== nextValues.appeal_type
                }
                noStyle
              >
                {() => {
                  const { getFieldValue } = form;
                  const appealType = getFieldValue('appeal_type');
                  if (
                    [
                      AppealTypeConfigEnum.ConditionalSupportAppeal,
                      AppealTypeConfigEnum.ConditionalNotSupportAppeal,
                    ].includes(appealType)
                  ) {
                    return <ConditionsForm formName="appeal_factors" form={form} />;
                  }
                  return null;
                }}
              </Form.Item>
              <Form.Item shouldUpdate noStyle>
                {() => {
                  const { getFieldValue } = form;
                  const conditionList = getFieldValue('appeal_factors');
                  if (
                    conditionList?.length &&
                    // 当选择「全部可申诉/不可申诉」时，不需要输入框。
                    getFieldValue('appeal_type') !== AppealTypeConfigEnum.BothNotSupportAppeal &&
                    getFieldValue('appeal_type') !== AppealTypeConfigEnum.BothSupportAppeal
                  )
                    return (
                      <Form.Item
                        name="appeal_condition"
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

export default AppealConfig;
