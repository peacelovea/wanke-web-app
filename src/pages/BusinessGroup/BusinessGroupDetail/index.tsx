import PageTitle from '@/components/PageTitle';
import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { BUSINESS_GROUP_DETAIL } from '../setting';

const BusinessGroupDetail = () => {
  const onFinish = () => {
    console.log('onFinish');
  };
  return (
    <PageHeaderWrapper>
      <PageTitle title="事业群信息" />
      <SubmitPanel action="readonly" formGroups={BUSINESS_GROUP_DETAIL} onFinish={onFinish} />
    </PageHeaderWrapper>
  );
};

export default BusinessGroupDetail;
