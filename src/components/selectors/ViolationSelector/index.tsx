import type { RadioProps } from 'antd';
import { Radio, Select } from 'antd';
import { VIOLATION_CONFIG_TYPE } from '@/scripts/options';

const options: any[] = [];

for (const item of VIOLATION_CONFIG_TYPE.entries()) {
  const [value, label] = item;
  options.push({ value, label });
}

const ViolationConfigSelector = (props: RadioProps) => {
  return (
    <Select allowClear style={{ width: 120 }} placeholder="请选择" options={options} {...props} />
  );
};

export const ViolationConfigRadio = (props: RadioProps) => {
  return (
    <Radio.Group {...props}>
      {options.map(({ value, label }) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default ViolationConfigSelector;
