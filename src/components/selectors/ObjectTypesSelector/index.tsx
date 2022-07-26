import type { SelectProps } from 'antd';
import { Select } from 'antd';
import useObjectType from '@/models/useObjectType';

interface ObjectTypesSelectorProps extends SelectProps {
  action_name?: string;
}

const ObjectTypesSelector = ({ action_name, ...props }: ObjectTypesSelectorProps) => {
  const { objectType: objectTypeList } = useObjectType();

  const options = objectTypeList?.map(({ desc, name }) => ({
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
      filterOption={(inputValue, option) => {
        return (option?.label as string)?.includes(inputValue);
      }}
      {...props}
    />
  );
};

export default ObjectTypesSelector;
