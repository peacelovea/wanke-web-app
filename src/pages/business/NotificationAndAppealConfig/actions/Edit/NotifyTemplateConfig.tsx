import type { FormInstance, FormItemProps } from 'antd';
import { Card } from 'antd';
import TemplatesConfigForm from '@/pages/business/NotificationAndAppealConfig/components/TemplatesConfigForm';

interface NotifyTemplateConfigProps extends FormItemProps {
  form: FormInstance;
}

const NotifyTemplateConfig = ({ form }: NotifyTemplateConfigProps) => {
  return (
    <Card title="「发通知」通知详情" style={{ marginTop: 10 }}>
      <TemplatesConfigForm form={form} />
    </Card>
  );
};

export default NotifyTemplateConfig;
