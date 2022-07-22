import type { ProColumns } from '@ant-design/pro-table';
import {
  APPEAL_CONFIG_TYPE,
  NOTIFICATION_DEFAULT_CONFIG,
  NOTIFICATION_SPECIAL_CONFIG,
} from '@/scripts/options';
import NotificationDefaultConfigSelector from '@/components/selectors/NotificationDefaultConfigSelector';
import NotificationSpecialConfigSelector from '@/components/selectors/NotificationSpecialConfigSelector';
import AppealsConfigSelector from '@/components/selectors/AppealConfigSelector';
import ObjectTypesSelector from '@/components/selectors/ObjectTypesSelector';
import { OnlineStatusEnum } from '@/scripts/enum';
import { UPDATE_AT, UPDATE_BY } from '@/pages/commonSettings';
import ActionsSelector from '@/components/selectors/ActionsSelector';

export const ID: ProColumns = {
  title: 'ID',
  key: 'id',
  dataIndex: 'id',
  hideInTable: true,
};

export const ACTION_CN_NAME: ProColumns = {
  title: '操作名称',
  key: 'action_name_cn',
  dataIndex: 'action_name_cn',
  hideInSearch: true,
};

export const ACTION_NAME: ProColumns = {
  title: '操作名称',
  key: 'action_name',
  dataIndex: 'action_name',
  renderFormItem: () => <ActionsSelector />,
  hideInTable: true,
};

export const ACTION_EN_NAME: ProColumns = {
  title: '操作英文名',
  key: 'action_name',
  dataIndex: 'action_name',
  hideInSearch: true,
};

export const OBJECT_TYPES: ProColumns = {
  title: '内容类型',
  key: 'object_types',
  dataIndex: 'object_types',
  width: 150,
  ellipsis: true,
  hideInSearch: true,
  render: (_, record) => record?.object_types?.join(',') ?? '-',
};

export const OBJECT_TYPE: ProColumns = {
  title: '内容类型',
  key: 'object_type',
  dataIndex: 'object_type',
  hideInTable: true,
  renderFormItem: () => <ObjectTypesSelector />,
};

export const DEFAULT_NOTIFY_CONFIG: ProColumns = {
  title: '默认配置',
  key: 'default_notify_action',
  dataIndex: 'default_notify_action',
  tooltip: '针被处置者是否发送通知的默认配置。',
  renderFormItem: () => <NotificationDefaultConfigSelector />,
  renderText: (text) => NOTIFICATION_DEFAULT_CONFIG.get(text) || '-',
};

export const SPECIAL_NOTIFY_CONFIG: ProColumns = {
  title: '特殊配置',
  key: 'have_special_notify_config',
  dataIndex: 'have_special_notify_config',
  tooltip: '针对被处置者的是否发送通知的特殊条件配置，区别于默认配置。',
  renderFormItem: () => <NotificationSpecialConfigSelector />,
  renderText: (text) => NOTIFICATION_SPECIAL_CONFIG.get(text) || '-',
};

export const REPORTER_NOTIFY: ProColumns = {
  title: '举报者通知',
  key: 'reporter_notify',
  dataIndex: 'reporter_notify',
  renderFormItem: () => <NotificationDefaultConfigSelector />,
  renderText: (text) => NOTIFICATION_DEFAULT_CONFIG.get(text) || '-',
  hideInTable: true,
};

export const APPEAL_CONFIG: ProColumns = {
  title: '申诉配置',
  key: 'appeal_type',
  dataIndex: 'appeal_type',
  renderFormItem: () => <AppealsConfigSelector />,
  renderText: (text) => APPEAL_CONFIG_TYPE.get(text) || '-',
};
export const OPERATIONS: ProColumns = {
  title: '操作',
  width: 150,
};

export const TEMPLATE_NAME: ProColumns = {
  title: '模板名称',
  key: 'appeal_type',
  dataIndex: 'appeal_type',
};

export const STATUS: ProColumns = {
  title: '上线状态',
  key: 'status',
  dataIndex: 'status',
  valueEnum: {
    [OnlineStatusEnum.offline]: { text: '已下线', status: 'Default' },
    [OnlineStatusEnum.online]: { text: '已上线', status: 'Success' },
  },
};

export const NOTIFICATION_APPEAL_CONFIG_COLUMNS = [
  {
    ...ID,
    hideInSearch: true,
  },
  ACTION_NAME,
  ACTION_CN_NAME,
  ACTION_EN_NAME,
  OBJECT_TYPES,
  OBJECT_TYPE,
  DEFAULT_NOTIFY_CONFIG,
  SPECIAL_NOTIFY_CONFIG,
  REPORTER_NOTIFY,
  APPEAL_CONFIG,
  STATUS,
  UPDATE_AT,
  UPDATE_BY,
];
