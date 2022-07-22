import type { ProColumns } from '@ant-design/pro-table';
import { JUMP_TYPE_OPTIONS, RECEIVER_TYPE_OPTIONS, TEMPLATE_TYPE_OPTIONS } from '@/scripts/options';
import { UPDATE_AT, UPDATE_BY } from '@/pages/commonSettings';
import { OnlineStatusEnum } from '@/scripts/enum';
import ReceiverSelector from '@/components/selectors/ReceiverSelector';
import TemplateTypeSelector from '@/components/selectors/TemplateTypeSelector';
import JumpTypeSelector from '@/components/selectors/JumpTypeSelector';

export const ID: ProColumns = {
  width: 100,
  title: 'ID',
  dataIndex: 'id',
  hideInSearch: true,
};
export const OPERATIONS: ProColumns = {
  title: '操作',
  hideInSearch: true,
};

export const TEMPLATE_NAME: ProColumns = {
  title: '模板名称',
  key: 'template_name',
  dataIndex: 'template_name',
};

export const RECEIVER: ProColumns = {
  title: '接收方',
  key: 'receiver_type',
  dataIndex: 'receiver_type',
  renderFormItem: () => <ReceiverSelector />,
  renderText: (text) => RECEIVER_TYPE_OPTIONS.get(text) || '-',
};

export const NOTIFICATION_TYPE: ProColumns = {
  title: '通知属性',
  key: 'template_type',
  dataIndex: 'template_type',
  renderFormItem: () => <TemplateTypeSelector />,
  renderText: (text) => TEMPLATE_TYPE_OPTIONS.get(text) || '-',
};

export const MESSAGE_TITLE: ProColumns = {
  title: '消息标题',
  key: 'msg_title',
  dataIndex: 'msg_title',
  width: 200,
};

export const MESSAGE_SUB_TITLE: ProColumns = {
  title: '副标题',
  key: 'msg_sub_title',
  dataIndex: 'msg_sub_title',
  width: 200,
};

export const JUMP_PAGE_TYPE: ProColumns = {
  title: '点击跳转页',
  key: 'jump_type',
  dataIndex: 'jump_type',
  renderFormItem: () => <JumpTypeSelector />,
  renderText: (text) => JUMP_TYPE_OPTIONS.get(text) || '-',
};

export const JUMP_PAGE_DETAIL: ProColumns = {
  title: '跳转详情',
  key: 'msg_detail',
  dataIndex: 'msg_detail',
  width: 400,
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

export const TEMPLATE_MANAGE_COLUMNS = [
  { ...ID, fixed: 'left' },
  {
    ...TEMPLATE_NAME,
    fixed: 'left',
  },
  RECEIVER,
  NOTIFICATION_TYPE,
  MESSAGE_TITLE,
  MESSAGE_SUB_TITLE,
  JUMP_PAGE_TYPE,
  JUMP_PAGE_DETAIL,
  UPDATE_AT,
  UPDATE_BY,
  STATUS,
];
