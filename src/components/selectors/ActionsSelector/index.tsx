import type { SelectProps } from 'antd';
import { Select } from 'antd';
import useActions from '@/models/useActions';

interface ActionsSelectorType extends SelectProps {
  type?: 'all' | 'unconfigured';
}

const ActionsSelector = ({ ...props }: ActionsSelectorType) => {
  const { actions } = useActions({ type: 'all' });

  const options = actions?.map(({ desc, name }) => ({
    label: desc,
    value: name,
  }));

  return (
    <Select
      placeholder="请选择"
      options={options}
      allowClear
      showSearch
      filterOption={(inputValue, option) =>
        (option?.label as string).includes(inputValue) ||
        (option?.value as string).includes(inputValue)
      }
      {...props}
    />
  );
};

export default ActionsSelector;
