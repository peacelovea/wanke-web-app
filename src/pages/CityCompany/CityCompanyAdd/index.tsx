import PageTitle from '@/components/PageTitle';
import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { CITY_BUSINESS_ADD } from '../setting';

const CityCompanyAdd = () => {
  const onFinish = () => {
    console.log('onFinish');
  };
  return (
    <PageHeaderWrapper>
      <PageTitle title="新增事业群" />
      <SubmitPanel action="add" formGroups={CITY_BUSINESS_ADD} onFinish={onFinish} />
    </PageHeaderWrapper>
  );
};

export default CityCompanyAdd;
