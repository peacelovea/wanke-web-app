import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { TEMPLATE_TYPE_OPTIONS } from '@/scripts/options';

const TemplateTypeSelector = (props: SelectProps) => {
  const options = [];

  for (const item of TEMPLATE_TYPE_OPTIONS.entries()) {
    const [value, label] = item;
    options.push({ value, label });
  }

  return <Select allowClear placeholder="请选择" options={options} {...props} />;
};

export default TemplateTypeSelector;
