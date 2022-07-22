import type { SelectProps } from 'antd';
import { Select } from 'antd';

interface MutiplyInputProps extends SelectProps {
  onChange?: (value: any) => any;
}

const MutiplyInput = ({ onChange }: MutiplyInputProps) => {
  const handleChange = (value: any) => {
    onChange?.(value);
  };

  return (
    <Select
      onChange={handleChange}
      mode="tags"
      style={{ width: '200px' }}
      tokenSeparators={[',']}
      open={false}
    />
  );
};

export default MutiplyInput;
