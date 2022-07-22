import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { NOTIFICATION_DEFAULT_CONFIG } from '@/scripts/options';

const NotificationDefaultConfigSelector = (props: SelectProps) => {
  const options = [];

  for (const item of NOTIFICATION_DEFAULT_CONFIG.entries()) {
    const [value, label] = item;
    options.push({ value, label });
  }

  return (
    <Select allowClear style={{ width: 120 }} placeholder="请选择" options={options} {...props} />
  );
};

export default NotificationDefaultConfigSelector;
