import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { RECEIVER_TYPE_OPTIONS } from '@/scripts/options';

const ReceiverSelector = (props: SelectProps) => {
  const options = [];

  for (const item of RECEIVER_TYPE_OPTIONS.entries()) {
    const [value, label] = item;
    options.push({ value, label });
  }

  return <Select allowClear placeholder="请选择" options={options} {...props} />;
};

export default ReceiverSelector;
