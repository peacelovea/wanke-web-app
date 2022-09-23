import type { ProTableGoMoreColumns } from '@ant-pro-go/table';
import moment from 'moment';
import { isUndefined } from 'lodash';

export interface ProTableRequestParams {
  current: number;
  pageSize: number;
  [searchKey: string]: any;
}

export const makeProTableRequest = (request: Function) => {
  return async ({ current, pageSize, ...query }: ProTableRequestParams) => {
    const res = await request({
      page: current,
      page_size: pageSize,
      ...query,
    });

    const { data } = res || {};
    return {
      current,
      data: data?.list ?? [],
      pageSize,
      total: data?.paging?.totals,
    };
  };
};

/**
 * 根据 resource 获取 access 路由地址, type 0 和 1 分别代表目录和菜单，即对应前端 1级 2级菜单
 * @param resource
 * @returns
 */
export const getAccessRoutesFromResources = (resource: API.Resource[]) =>
  resource.filter(({ type }) => type === 0 || type === 1).map(({ url }) => url);

/**
 * 根据 resource 获取 access 路由地址, type 3 代表 button
 * @param resource
 * @returns
 */
export const getAccessButtonFromResources = (resource: API.Resource[]) =>
  resource.filter(({ type }) => type === 3).map(({ url }) => url);

/**
 * 格式化时间
 */
export const formatTime = (secondTimestamp?: string | number, rule = 'YYYY-MM-DD HH:mm:ss') => {
  if (!secondTimestamp) return '';

  if (typeof secondTimestamp === 'number') return moment(secondTimestamp * 1000).format(rule);

  return moment(secondTimestamp, 'YYYYMMDDHHmmss').format(rule);
};

export const toTimeSyncQuery: ProTableGoMoreColumns = {
  searcher: {
    syncQuery: {
      toQuery: (stateValue) =>
        Array.isArray(stateValue)
          ? stateValue.slice(0, 2).map((v: string) => moment(v).format('YYYYMMDD'))
          : [],
      toState: (queryValue) =>
        Array.isArray(queryValue)
          ? queryValue.slice(0, 2).map((v: string) => moment(v, 'YYYYMMDD'))
          : [],
    },
  },
};

export const toNumberSyncQuery: ProTableGoMoreColumns = {
  searcher: {
    syncQuery: {
      toState: (queryValue: any) => {
        if (Array.isArray(queryValue)) return queryValue.map((i) => Number(i));
        return Number(queryValue);
      },
    },
  },
};

/**
 * 用于替换对象里的 key
 * @param object
 * @param keysMap
 * @returns boolean
 */
export const replaceKeys = (object = {}, keysMap = {}): any => {
  if (object) {
    if (Array.isArray(object)) {
      return object.map((item) => replaceKeys(item, keysMap));
    }
    return Object.keys(object)?.reduce((acc, key) => {
      const newKey = keysMap[key] || key;
      acc[newKey] = object[key];
      return acc;
    }, {});
  }
  return [];
};

/**
 * s 级时间转 h
 */
export const covertTimeStoH = (time: number | undefined | null): any => {
  if (time) {
    return `${(Number(time) / 3600).toFixed(2)} h`;
  }
  return null;
};

/**
 * 数字转大写字母
 */
export const numberToLetter = (num: number) => String.fromCharCode(num + 65);

/**
 * 数据不存在时返回规定的内容
 */
export const getOptimalValue = (val: any, str: string | number = '-') =>
  isUndefined(val) ? str : val;
