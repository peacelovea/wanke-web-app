import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { JUMP_TYPE_OPTIONS } from '@/scripts/options';

const JumpTypeSelector = (props: SelectProps) => {
  const options = [];

  for (const item of JUMP_TYPE_OPTIONS.entries()) {
    const [value, label] = item;
    options.push({ value, label });
  }

  return <Select allowClear placeholder="请选择" options={options} {...props} />;
};

export default JumpTypeSelector;
