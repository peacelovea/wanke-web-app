import { Descriptions, Divider } from 'antd';

interface DesWithNoLengthProps {
  title: string;
  show: string;
  column: number;
}
export default function DescriptionsWithNoLength({ title, show, column }: DesWithNoLengthProps) {
  return (
    <>
      <Descriptions title={title} column={column}>
        <Descriptions.Item label={title}>{show}</Descriptions.Item>
      </Descriptions>
      <Divider />
    </>
  );
}
