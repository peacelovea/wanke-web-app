import PageTitle from '@/components/PageTitle';
import { SubmitPanel } from '@/components/ProFormGo';
import { CITY_BUSINESS_DETAIL } from '../setting';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const CityCompanyDetail = () => {
  return (
    <PageHeaderWrapper>
      <PageTitle title="事业群信息" />
      <SubmitPanel action="readonly" formGroups={CITY_BUSINESS_DETAIL} />
    </PageHeaderWrapper>
  );
};

export default CityCompanyDetail;
