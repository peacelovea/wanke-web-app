import type { RadioProps } from 'antd';
import { Radio, Select } from 'antd';
import { NOTIFICATION_SPECIAL_CONFIG } from '@/scripts/options';

const options: any[] = [];

for (const item of NOTIFICATION_SPECIAL_CONFIG.entries()) {
  const [value, label] = item;
  options.push({ value, label });
}

const NotificationSpecialConfigSelector = (props: RadioProps) => {
  return (
    <Select allowClear style={{ width: 120 }} placeholder="请选择" options={options} {...props} />
  );
};

export const NotificationSpecialConfigRadio = (props: RadioProps) => {
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

export default NotificationSpecialConfigSelector;
