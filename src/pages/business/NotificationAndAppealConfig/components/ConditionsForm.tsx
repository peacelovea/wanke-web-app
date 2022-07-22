import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import ObjectTypesSelector from '@/components/selectors/ObjectTypesSelector';
import ResourcesSelector from '@/components/selectors/ResourcesSelector';
import MemberTypesSelector from '@/components/selectors/MemberTypesSelector';
import styles from './index.less';
import ConditionsSelector from '@/components/selectors/ConditionsSelector';
import { numberToLetter } from '@/scripts/utils';
import MutiplyInput from './MutiplyInput';

const { Option } = Select;

interface ConditionsFormProps {
  form: FormInstance;
  formName: string;
}

const initialStyle = { width: 200 };

const TimeSelectInput = () => (
  <Row className={styles.inputGroup}>
    <Col>
      <Input addonBefore="处置时间距离内容最新更新时间" />
    </Col>
    <Col>
      <Select defaultValue="minute">
        <Option value="minute">分</Option>
        <Option value="hour">时</Option>
        <Option value="day">天</Option>
        <Option value="week">周</Option>
      </Select>
    </Col>
  </Row>
);

const ConditionsForm = ({ form, formName }: ConditionsFormProps) => {
  const renderConditionValueItem = (type: string) => {
    switch (type) {
      case 'object_type':
        return (
          <ObjectTypesSelector style={initialStyle} placeholder="请选择内容类型" mode="multiple" />
        );
      case 'source':
        return (
          <ResourcesSelector style={initialStyle} placeholder="请选择处置来源" mode="multiple" />
        );
      case 'reason':
        return <MutiplyInput />;
      case 'rule':
        return <MutiplyInput />;
      case 'member_type':
        return (
          <MemberTypesSelector style={initialStyle} placeholder="请选择用户类型" mode="multiple" />
        );
      case 'seconds_between_update_and_operate':
        return <TimeSelectInput />;
      default:
        return <Input style={initialStyle} />;
    }
  };

  return (
    <Form.List name={formName}>
      {(fields, { add, remove }) => (
        <div>
          {fields.map((field, index) => {
            return (
              <Space key={field.key} align="start" style={{ width: '100%' }}>
                <Form.Item
                  {...field}
                  label={<strong>{numberToLetter(index)}</strong>}
                  name={[field.name, 'condition']}
                  rules={[{ required: true }]}
                >
                  <ConditionsSelector style={{ width: 200 }} />
                </Form.Item>
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    const condition = form.getFieldValue([formName])[index]?.condition;
                    return (
                      <Form.Item
                        {...field}
                        name={[field.name, 'value']}
                        rules={[{ required: true }]}
                      >
                        {renderConditionValueItem(condition)}
                      </Form.Item>
                    );
                  }}
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} style={{ marginTop: 8 }} />
              </Space>
            );
          })}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              添加条件
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
};

export default ConditionsForm;
