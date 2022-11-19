import { Descriptions } from 'antd';

const DescriptionGO = (props: any) => {
  const { label } = props;
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label={label}>{label}</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionGO;
