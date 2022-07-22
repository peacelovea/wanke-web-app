import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { CONFIG_CONDITIONS } from '@/scripts/options';

const ConditionsSelector = (props: SelectProps) => {
  const options = [];

  for (const item of CONFIG_CONDITIONS.entries()) {
    const [value, label] = item;
    options.push({ value, label });
  }

  return <Select allowClear placeholder="请选择" options={options} {...props} />;
};

export default ConditionsSelector;
