import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, message } from 'antd';
import { useRequest } from 'ahooks';
import { createTemplate } from '@/services/template';
import { history } from 'umi';
import FormPanel from '@/pages/business/TemplateManage/components/FormPanel';

function Create() {
  const handleGoBack = () => history.push('/business/template-manage');

  const { run } = useRequest(createTemplate, { manual: true });

  const handleFinish = async (values: any) => {
    if (values) {
      await run({ ...values });
      message.success('创建成功');
      handleGoBack();
    }
  };

  return (
    <PageHeaderWrapper>
      <Card bordered={false} title={false}>
        <FormPanel type="create" onFinish={handleFinish} goBack={handleGoBack} />
      </Card>
    </PageHeaderWrapper>
  );
}

export default Create;
