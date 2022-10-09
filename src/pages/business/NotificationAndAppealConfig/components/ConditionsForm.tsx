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
import { useState } from 'react';

const { Option } = Select;
const rules = [{ required: true, message: '请选择或输入' }];

interface ConditionsFormProps {
  form: FormInstance;
  formName: string;
  onChange?: (val: any) => void;
  value?: any;
}

const initialStyle = { width: 500 };

export const convertUnitToNum = (unit: string) => {
  switch (unit) {
    case 'minute':
      return 60;
    case 'hour':
      return 3600;
    case 'day':
      return 86400;
    case 'week':
      return 604800;
    default:
      return 60;
  }
};

const TimeSelectInput = ({
  onChange,
  value: defaultValue,
}: {
  onChange?: (val: any) => void;
  value?: [number, string];
}) => {
  const [defaultSeconds, defaultUnit] = defaultValue?.length ? defaultValue : [0, 'minute'];
  const defaultConvertedValue = Number(defaultSeconds) / convertUnitToNum(defaultUnit);

  const [value, setValue] = useState(defaultConvertedValue);
  const [unitVal, setUnit] = useState(defaultUnit);

  const handleChangeToForm = (_value: number) => {
    onChange?.(`${_value},${unitVal}`);
  };

  const handleChangeUnit = (_unit: string) => {
    setUnit(_unit);
    const num = convertUnitToNum(_unit) ?? 60;
    if (!Number.isNaN(value)) {
      handleChangeToForm(Number(value) * num);
    }
  };

  const handleChangeValue = (e: any) => {
    const _value = e.target.value;
    setValue(_value);
    const num = convertUnitToNum(unitVal) ?? 60;
    if (!Number.isNaN(_value)) {
      handleChangeToForm(Number(_value) * num);
    }
  };

  return (
    <Row className={styles.inputGroup}>
      <Col>
        <Input
          addonBefore="处置时间距离内容最新更新时间"
          onChange={handleChangeValue}
          value={value}
        />
      </Col>
      <Col>
        <Select
          defaultValue="minute"
          onChange={handleChangeUnit}
          value={unitVal}
          allowClear={false}
        >
          <Option value="minute">分</Option>
          <Option value="hour">时</Option>
          <Option value="day">天</Option>
          <Option value="week">周</Option>
        </Select>
      </Col>
    </Row>
  );
};

const ConditionsForm = ({ form, formName, onChange, value }: ConditionsFormProps) => {
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
        return <MutiplyInput style={initialStyle} />;
      case 'rule':
        return <MutiplyInput style={initialStyle} />;
      case 'member_type':
        return (
          <MemberTypesSelector style={initialStyle} placeholder="请选择用户类型" mode="multiple" />
        );
      case 'seconds_between_update_and_operate':
        return <TimeSelectInput onChange={onChange} value={value} />;
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
                  rules={rules}
                >
                  <ConditionsSelector style={{ width: 200 }} />
                </Form.Item>
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    const condition = form.getFieldValue([formName])[index]?.condition;
                    return (
                      <Form.Item {...field} name={[field.name, 'value']} rules={rules}>
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
