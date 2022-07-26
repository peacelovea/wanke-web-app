import { useRequest } from '@@/plugin-request/request';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { fetchTemplateList } from '@/services/template';

interface TemplateSelectorProps extends SelectProps {
  templateStatus?: number;
  templateReceiveType?: number;
}

const TemplateSelector = ({
  templateStatus,
  templateReceiveType,
  ...props
}: TemplateSelectorProps) => {
  const { data } = useRequest<{ data: { list: any[] } }>(() =>
    fetchTemplateList({
      status: templateStatus,
      receiver_type: templateReceiveType,
      page_size: 200,
    }),
  );

  const { list: objectTypeList } = data || {};

  const options = objectTypeList?.map(({ id, template_name, msg_title, msg_sub_title }) => ({
    label: `${template_name} | ${msg_title} | ${msg_sub_title}`,
    value: id,
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

export default TemplateSelector;
