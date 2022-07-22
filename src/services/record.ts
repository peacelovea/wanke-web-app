import { request } from 'umi';

const PREFIX = '/api/v1/record';

/**
 * 获取通知记录列表
 * @param params
 * @returns
 */
export const fetchNotificationRecordList = async (params: any) =>
  request(`${PREFIX}/list`, { params, mock: false });
