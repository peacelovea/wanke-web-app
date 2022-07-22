import { request } from 'umi';

const PREFIX = '/api/v1/meta';

/**
 * 查询操作类型列表
 * @param params
 * @returns
 */
export const fetchActionsList = async (params: { query_type: 'all' | 'unconfigured' }) =>
  request(`${PREFIX}/actions`, { params, mock: false });

/**
 * 查询内容类型列表
 * @param params
 * @returns
 */
export const fetchObjectTypeList = async (params?: { action_name?: string }) =>
  request(`${PREFIX}/object_types`, { params, mock: false });

/**
 * 查询处置来源列表
 * @returns
 */
export const fetchResourceList = async () => request(`${PREFIX}/sources`, { mock: false });

/**
 * 查询用户类型
 * @returns
 */
export const fetchMemberTypeList = async () => request(`${PREFIX}/member_types`, { mock: false });
