import type { FormInstance, FormProps } from 'antd/lib/form';
import type { ColProps } from 'antd/lib/grid/col';

export interface ClearRule {
  /**
   * 监听值发生变化的字段
   */
  changedName: string | string[];

  /**
   * 被清空值的字段集合，默认清空规则: 值重置为 undefined
   */
  clearedName: string | string[];

  /**
   * 返回 true, clearedName 将会被清空
   */
  emptied?: (curChangedValue: any) => boolean;
}

type FormItemLayout = {
  labelCol?: ColProps;
  wrapperCol?: ColProps;
};

export interface FormWidgetProps extends FormProps<any> {
  onChange?: (values: any, form?: FormInstance) => void;
  form: FormInstance;
  clearRules?: ClearRule[];
  formItemLayout?: FormItemLayout;
}
