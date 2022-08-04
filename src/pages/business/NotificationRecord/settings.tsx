import type { ProColumns } from '@ant-design/pro-table';
import { JUMP_TYPE_OPTIONS, RECEIVER_TYPE_OPTIONS } from '@/scripts/options';
import JumpTypeSelector from '@/components/selectors/JumpTypeSelector';
import ReceiverSelector from '@/components/selectors/ReceiverSelector';
import { Tooltip } from 'antd';
import { formatTime } from '@/scripts/utils';
import styles from './index.less';
import ParagraphExpand from '@/components/ParagraphExpand';

export const ID: ProColumns = {
  title: 'ID',
  key: 'id',
  dataIndex: 'id',
  hideInTable: true,
  hideInSearch: true,
};

export const SENDING_TIME: ProColumns = {
  title: '发送时间',
  key: 'create_at',
  dataIndex: 'create_at',
  hideInSearch: true,
  renderText: (text) => formatTime(text),
};

export const USER_TOKEN: ProColumns = {
  title: '用户token',
  key: 'member_token',
  dataIndex: 'member_token',
};

export const OBJECT_PERSION: ProColumns = {
  title: '接收者',
  key: 'receiver_type',
  dataIndex: 'receiver_type',
  renderFormItem: () => <ReceiverSelector />,
  renderText: (text) => RECEIVER_TYPE_OPTIONS.get(text) || '-',
};

export const NOTIFICATION_TEMPLATE_NAME: ProColumns = {
  title: '通知模版名称',
  key: 'template_name',
  dataIndex: 'template_name',
};

export const INFOMATION_TITLE: ProColumns = {
  title: '消息标题',
  key: 'msg_title',
  dataIndex: 'msg_title',
  width: 100,
  render: (_, record) => (
    <Tooltip placement="top" title={record.msg_title}>
      <div className={styles.nowrapRow}>{record.msg_title}</div>
    </Tooltip>
  ),
};
export const INFOMATION_ID: ProColumns = {
  title: '消息ID',
  key: 'id',
  dataIndex: 'id',
};
export const NOTIFICATION_TEMPLATE_ID: ProColumns = {
  title: '通知模版ID',
  key: 'template_id',
  dataIndex: 'template_id',
};
export const SUB_INFOMATION_TITLE: ProColumns = {
  title: '消息副标题',
  key: 'msg_sub_title',
  dataIndex: 'msg_sub_title',
  width: 200,
  render: (_, record) => <ParagraphExpand rows={3} content={record.msg_sub_title} />,
};

export const CLICK_JUMPPAGE: ProColumns = {
  title: '点击跳转页',
  key: 'jump_type',
  dataIndex: 'jump_type',
  renderFormItem: () => <JumpTypeSelector />,
  renderText: (text) => JUMP_TYPE_OPTIONS.get(text) || '-',
};

export const JUMP_DETAIL: ProColumns = {
  title: '跳转详情',
  key: 'msg_detail',
  dataIndex: 'msg_detail',
  width: 300,
  render: (_, record) => <ParagraphExpand rows={2} content={record.msg_detail} />,
};

const MAX_ORDER = 20;

export const NOTIFICATION_RECORD = [
  ID,
  {
    ...SENDING_TIME,
    order: MAX_ORDER - 8,
  },
  {
    ...USER_TOKEN,
    order: MAX_ORDER - 1,
  },
  {
    ...OBJECT_PERSION,
    order: MAX_ORDER - 7,
  },
  NOTIFICATION_TEMPLATE_ID,
  {
    ...NOTIFICATION_TEMPLATE_NAME,
    order: MAX_ORDER - 2,
  },
  {
    ...INFOMATION_TITLE,
    order: MAX_ORDER - 3,
  },

  {
    ...SUB_INFOMATION_TITLE,
    order: MAX_ORDER - 4,
  },
  {
    ...CLICK_JUMPPAGE,
    order: MAX_ORDER - 5,
  },
  {
    ...JUMP_DETAIL,
    order: MAX_ORDER - 6,
  },
  INFOMATION_ID,
];
