import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { BUSINESS_GROUP_MODIFY } from '../setting';

const BusinessGroupModify = () => {
  const onFinish = () => {
    console.log('onFinish');
  };
  return (
    <PageHeaderWrapper>
      <SubmitPanel action="add" formGroups={BUSINESS_GROUP_MODIFY} onFinish={onFinish} />
    </PageHeaderWrapper>
  );
};

export default BusinessGroupModify;
