import { request } from 'umi';

const PREFIX = '/api/v1/action_config';

/**
 * 获取通知配置列表
 * @param params
 * @returns
 */
export const fetchConfigList = async (params: any) =>
  request(`${PREFIX}/list`, { params, mock: false });

/**
 * 获取通知配置详情
 * @returns
 */
export const fetchConfigDetail = async (id: string) => request(`${PREFIX}/${id}`, { mock: false });

/**
 * 新增通知配置
 * @data data
 * @returns
 */
export const createConfig = async (data: any) =>
  request(`${PREFIX}`, { method: 'POST', data, mock: false });

/**
 * 修改通知配置
 * @data data
 * @returns
 */
export const editConfig = async (data: { id: string; params: any }) =>
  request(`${PREFIX}/${data.id}`, { method: 'PUT', data: { ...data.params }, mock: false });

/**
/**
 * 
 * 上/下线通知配置
 * @data
 * @returns
 */
export const switchConfigStatus = async (data: { id: string; status: number }) =>
  request(`${PREFIX}/update_status/${data.id}`, {
    method: 'PUT',
    mock: false,
    data: { status: data.status },
  });
