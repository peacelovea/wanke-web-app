import type { SelectProps } from 'antd';
import { Select } from 'antd';
import useSource from '@/models/useSource';

const ResourcesSelector = (props: SelectProps) => {
  const { source } = useSource();

  const options = source?.map(({ desc, name }) => ({
    label: desc,
    value: name,
  }));

  return (
    <Select
      style={{ width: 200 }}
      placeholder="请选择"
      options={options}
      showSearch
      allowClear
      filterOption={(inputValue, option) =>
        (option?.label as string).includes(inputValue) ||
        (option?.value as string).includes(inputValue)
      }
      {...props}
    />
  );
};

export default ResourcesSelector;
