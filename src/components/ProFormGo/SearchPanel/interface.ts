import type { BasicFormItem } from '../FormTool/interface';
import type { FormWidgetProps } from '../FormWidget/interface';

export type SearchPanelItems = {
  /**
   * 基本 items 配置
   */
  basic: BasicFormItem[];

  /**
   * 展开更多里的 items 配置
   */
  more?: BasicFormItem[];
};

type SyncFunc = (values: any) => any;

export interface SearchPanelProps {
  items: SearchPanelItems;

  /**
   * 是否展示更多
   */
  showExpand?: boolean;

  /**
   * 全量将 url params 同步到 query request
   */
  syncToQuery?: boolean;

  onSyncToQuery?: SyncFunc;

  /**
   * 全量将 params 同步到 url
   */
  syncToUrl?: boolean | SyncFunc;

  initialValues?: FormWidgetProps['initialValues'];
  expandInitialValues?: FormWidgetProps['initialValues'];
  clearRules?: FormWidgetProps['clearRules'];

  /**
   * 默认收缩的开关
   */
  collapsed?: boolean;

  onSubmit?: (values: any) => void;
  onReset?: (values: FormWidgetProps['initialValues']) => void;
  onChange?: (values: any) => void;
  onExpand?: (expanded: boolean) => void;
}
