// 全局请求配置
import oauth from '@/scripts/oauth';
import { notification } from 'antd';
import type { RequestConfig } from 'umi';
import type { RequestInterceptor } from 'umi-request';

const codeMap = {
  403: '暂无权限',
  404: '资源不存在',
  500: '服务器异常',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

// @ts-ignore
const zapiMockOptionsInterceptor: RequestInterceptor = (url, { mock, ...options }) => {
  return {
    url: mock ? `/mock/6513/${url}` : url,
    options: { ...options, interceptors: true },
  };
};

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      const { error, is_success, data, ...otherRes } = resData;

      if (error) {
        otherRes.errorCode = error.code;
        otherRes.errorMessage = error.message;
      }

      return {
        ...otherRes,
        success: is_success,
        data,
      };
    },
  },
  errorHandler: (error) => {
    if (error?.name === 'BizError') {
      notification.error({
        message: `返回错误 ${error.data?.error?.code || error.message}`,
        description: error.data?.error?.message,
      });
      return Promise.reject(error.data);
    }
    if (error?.response) {
      const { status } = error.response;
      if (status === 401) {
        oauth.login();
        return null;
      }
      notification.error({
        message: `请求错误 ${status}`,
        description: codeMap[status] || '请求异常',
      });
    } else {
      // 请求初始化时出错或者没有响应返回的异常
      notification.error({
        message: '请求没有响应',
      });
    }
    throw error;
  },
  requestInterceptors: [zapiMockOptionsInterceptor],
};
