import { Helmet } from 'umi';

function PageTitle({ title }: props) {
  return <Helmet title={title} />;
}

export default PageTitle;
