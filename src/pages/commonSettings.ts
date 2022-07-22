import type { ProColumns } from '@ant-design/pro-table';
import moment from 'moment';
import { formatTime } from '@/scripts/utils';

export const UPDATE_AT: ProColumns = {
  title: '更新时间',
  key: 'update_at',
  dataIndex: 'update_at',
  hideInSearch: true,
  renderText: (text: string) => formatTime(text),
};

export const UPDATE_BY: ProColumns = {
  title: '更新人',
  key: 'update_user',
  dataIndex: 'update_user',
  hideInSearch: true,
};

export const DATE_RANGE: ProColumns = {
  title: '时间区间',
  dataIndex: 'range',
  hideInTable: true,
  initialValue: [moment().subtract(7, 'days'), moment()],
};
