import PageTitle from '@/components/PageTitle';
import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { BUSINESS_GROUP_ADD } from '../setting';

const BusinessGroupAdd = () => {
  const onFinish = () => {
    console.log('onFinish');
  };
  return (
    <PageHeaderWrapper>
      <PageTitle title="新增事业群" />
      <SubmitPanel action="add" formGroups={BUSINESS_GROUP_ADD} onFinish={onFinish} />
    </PageHeaderWrapper>
  );
};

export default BusinessGroupAdd;
