import { Descriptions } from 'antd';

const DescriptionGO = (props: any) => {
  const { title } = props;
  console.log(props, 'props');

  return (
    <Descriptions>
      <Descriptions.Item>
        <strong>{title}</strong>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionGO;
