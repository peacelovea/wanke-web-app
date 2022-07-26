import type { SelectProps } from 'antd';
import { Select } from 'antd';
import useMemberType from '@/models/useMemberType';

const MemberTypesSelector = (props: SelectProps) => {
  const { memberType } = useMemberType();

  const options = memberType?.map(({ desc, name }) => ({
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

export default MemberTypesSelector;
