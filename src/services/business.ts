import { request } from 'umi';

const PREFIX = '/api/v1/';

/**
 * 获取通知配置列表
 * @param params
 * @returns
 */
export const fetchConfigList = async (params: any) =>
  request(`${PREFIX}/list`, { params, mock: false });
