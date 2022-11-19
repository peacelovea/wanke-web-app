import type { ReactNode } from 'react';
import type { Rule, FormInstance } from 'antd/lib/form';
import type { UserRole } from '@/models/useUserRoles';
import type { SwitchProps } from 'antd/lib/switch';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import type { RadioGroupProps } from 'antd/lib/radio/interface';
import type { SubmitPanelProps } from '@/components/ProFormGo/SubmitPanel/interface';
import type { CommonSelectGoProps } from '@/components/ProFormGo/SelectGo';
import type { RangePickerGoProps } from '@/components/ProFormGo/RangePickerGo';
import type { AuthorityTabsProps } from '@/components/ProFormGo/AuthorityTabs';
import type { InputGoProps } from '@/components/ProFormGo/InputGo';
import type { TextAreaGoProps } from '@/components/ProFormGo/TextareaGo';
import type { InputNumberGoProps } from '@/components/ProFormGo/InputNumberGo';
import type { InputLoadingGoProps } from '@/components/ProFormGo/InputLoadingGo';
import type { MotionSelectProps } from '@/components/Selects/MotionSelect';
import type { ReviewGroupSelectProps } from '@/components/Selects/ReviewGroupSelect';
import type { UsersSelectProps } from '@/components/Selects/UsersSelect';
import type { SceneTypeSelectProps } from '@/components/Selects/SceneTypeSelect';
import type { BoardSelectProps } from '@/components/Selects/BoardSelect';
import type { DataSourceSelectProps } from '@/components/Selects/DataSourceSelect';
import type { TicketOperationCheckboxProps } from '@/components/Checkbox/TicketOperationCheckbox';

export type DisabledFunc = (props: FormToolProps | SubmitPanelProps, form: FormInstance) => boolean;

type RulesFunc = (props: FormToolProps | SubmitPanelProps, form: FormInstance) => Rule[];

export interface ExtraShowParams {
  roles?: UserRole[];
}

type ShowFunc = (fm: FormInstance, extra?: ExtraShowParams) => boolean;

type FormItemType =
  | 'FormInputText'
  | 'FormSimpleSelect'
  | 'FormSceneSelect'
  | 'FormManageSelect'
  | 'FormReviewSelect'
  | 'FormSceneTypeSelect'
  | 'FormRadioGroup'
  | 'FormTicketOperationCheckbox'
  | 'FormTimeScale'
  | 'FormRangePicker'
  | 'AuthorityTabs'
  | 'FormMediaTypeSelect'
  | 'FormDataSourceSelect'
  | 'FormContentTypeSelect'
  | 'FormBusinessTypeSelect'
  | 'FormUsersSelect'
  | 'FormMultiSelect'
  | 'FormBoardSelect'
  | 'FormMotionSelect'
  | 'FormVideoTypeSelect'
  | 'FormInputNumber'
  | 'FormSwitch'
  | 'FormInputLoading'
  | 'FormTextarea'
  | 'Customize'
  | 'FormZTAGSelect'
  | 'FormRelationSelect'
  | 'FormGroupTypeSelect'
  | string
  | undefined;

export type SyncToQueryFunc = (
  queryValue: string | number,
  urlParams: Record<string, string | number>,
) => any;

export interface FormToolItem {
  /**
   * 字段名
   */
  name?: string;

  /**
   * label 标签的文本
   */
  label?: string;

  type?: FormItemType;

  /**
   * 校验规则
   */
  rules?: Rule[] | RulesFunc;

  placeholder?: any;

  /**
   * 是否追加默认选项，即全部选项，主要适用于 @/components/select
   */
  addedDefaultOption?: boolean;

  /**
   * 禁用
   */
  disabled?: boolean | DisabledFunc;

  colSpan?: number;

  colOffset?: number;

  formItemProps?: FormItemProps;

  style?: React.CSSProperties;

  show?: boolean | ShowFunc;

  renderFormItem?: ReactNode;

  isMultiple?: boolean; // 是否多选

  /**
   * 单独配置将 urlParams 同步到 query request
   */
  syncToQuery?: boolean | SyncToQueryFunc;
}

export type SelectTool = FormToolItem &
  CommonSelectGoProps &
  MotionSelectProps &
  ReviewGroupSelectProps &
  UsersSelectProps &
  SceneTypeSelectProps &
  BoardSelectProps &
  DataSourceSelectProps;

export type InputTool = FormToolItem &
  InputGoProps &
  InputNumberGoProps &
  InputLoadingGoProps &
  TextAreaGoProps;

export type RangePickerTool = FormToolItem & RangePickerGoProps;

export type ExtraTool = FormToolItem & RadioGroupProps & AuthorityTabsProps & SwitchProps;

export type RadioTool = FormToolItem & RadioGroupProps;

export type CheckboxTool = FormToolItem & TicketOperationCheckboxProps;

export type BasicFormItem =
  | FormToolItem
  | (InputTool & SelectTool & ExtraTool & RangePickerTool & CheckboxTool);

export type FormToolAction = 'edit' | 'add' | 'readonly';

export interface FormToolProps {
  items: BasicFormItem[];

  className?: string;

  extraShowParams?: ExtraShowParams;

  action?: FormToolAction;

  children?: ReactNode;

  operation_ids?: number[];
}
