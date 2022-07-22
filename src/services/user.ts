import { request } from 'umi';

const PREFIX = '/api/v1';

/**
 * 查询用户信息
 * @returns
 */
export const fetchUserInfo = async () => request(`${PREFIX}/user/current`, { mock: false });

/**
 * 查询 uac 权限
 * @returns
 */
export const fetchResource = async () => request(`${PREFIX}/user/resource`, { mock: false });
