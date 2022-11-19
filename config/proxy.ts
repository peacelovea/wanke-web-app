// umi proxy: https://umijs.org/zh-CN/config#proxy
import { IConfig } from 'umi';

const proxy: IConfig['proxy'] = {
  '/mock/*': {
    target: '',
    changeOrigin: true,
  },
  '/api/*': {
    target: '',
    changeOrigin: true,
  },
};

export default proxy;
