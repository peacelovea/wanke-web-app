import { DefaultFooter } from '@ant-design/pro-layout';

export default function Footer() {
  return <DefaultFooter copyright={`${new Date().getFullYear()} 万科`} links={[]} />;
}
