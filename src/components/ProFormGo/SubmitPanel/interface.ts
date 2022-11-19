import type { FormWidgetProps } from '@/components/ProFormGo/FormWidget/interface';
import type { FormToolProps } from '@/components/ProFormGo/FormTool/interface';
import type { FormInstance } from 'antd';
import type { BasicFormItem } from '../FormTool/interface';

export type FormGroup = {
  /**
   * 'ProFormGroup' | undefined
   */
  type: string;

  /**
   * 一个 FormGroup 的标题，例如：基础设置
   */
  title?: string;

  /**
   * 表单类型，对应的props，逻辑配置
   */
  children: BasicFormItem[];
};

export interface SubmitPanelProps extends Omit<FormWidgetProps, 'form'> {
  action: FormToolProps['action'];

  formGroups: FormGroup[];

  footerRender?: (onFinish: any, form: FormInstance, initValues?: any) => React.ReactNode;
}
