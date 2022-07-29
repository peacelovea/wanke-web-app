import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { useState } from 'react';

interface MutiplyInputProps extends SelectProps {
  onChange?: (value: any) => any;
}

const MutiplyInput = ({ onChange, value }: MutiplyInputProps) => {
  const defaultValue = Array.isArray(value) ? value : value?.split(',') ?? [];
  const [val, setValue] = useState(defaultValue);

  const handleChange = (value: any) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <Select
      value={val}
      onChange={handleChange}
      mode="tags"
      style={{ width: '200px' }}
      tokenSeparators={[',']}
      open={false}
    />
  );
};

export default MutiplyInput;
