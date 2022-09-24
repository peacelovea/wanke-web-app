import { request } from 'umi';

const PREFIX = '/api/v1/content-manage';

/**
 *
 * 评论区管控表格查询接口
 * @data
 * @returns
 */
export const fetchObjectTypes = async (params?: any) =>
  request(`${PREFIX}/object`, { params, mock: false });

/**
 *
 * 查询评论接口
 * @data
 * @returns
 */
export const fetchCommentList = async (params?: any) =>
  request(`${PREFIX}/get_root_comments`, { params, mock: false });

/**
 * 二级评论列表
 */
export const fetchMoreComments = async (params?: any) =>
  request(`${PREFIX}/anchor_more_comments`, { params, mock: false });

/**
 *  评论勾选上传接口
 */
export const submitSelectKey = async (data?: any) =>
  request(`${PREFIX}/process`, { data, method: 'POST', mock: false });
