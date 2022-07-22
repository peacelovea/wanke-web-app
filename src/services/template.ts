import { request } from 'umi';

const PREFIX = '/api/v1/template';

/**
 * 获取模板列表
 * @param params
 * @returns
 */
export const fetchTemplateList = async (params?: any) =>
  request(`${PREFIX}/list`, { params, mock: false });

/**
 * 获取模板详情
 * @returns
 */
export const fetchTemplateDetail = async (id: number) =>
  request(`${PREFIX}/${id}`, { mock: false });

/**
 * 新建模板
 * @data
 * @returns
 */
export const createTemplate = async (data: any) =>
  request(`${PREFIX}`, { method: 'POST', mock: false, data });

/**
 * 编辑模板
 * @data
 * @returns
 */
export const updateTemplate = async (data: any) =>
  request(`${PREFIX}/${data.id}`, { method: 'PUT', mock: false, data });

/**
 * 上/下线模板
 * @data
 * @returns
 */
export const switchTemplateStatus = async (data: { id: string; status: number }) =>
  request(`${PREFIX}/update_status/${data.id}`, {
    method: 'PUT',
    mock: false,
    data: { status: data.status },
  });
