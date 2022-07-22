import type { RadioProps } from 'antd';
import { Radio, Select } from 'antd';
import { APPEAL_CONFIG_TYPE } from '@/scripts/options';

const options: any[] = [];

for (const item of APPEAL_CONFIG_TYPE.entries()) {
  const [value, label] = item;
  options.push({ value, label });
}

const AppealsConfigSelector = (props: RadioProps) => {
  return (
    <Select style={{ width: 120 }} placeholder="请选择" options={options} allowClear {...props} />
  );
};

export const AppealsConfigRadio = (props: RadioProps) => {
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

export default AppealsConfigSelector;
