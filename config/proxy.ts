// umi proxy: https://umijs.org/zh-CN/config#proxy
import { IConfig } from 'umi';

const proxy: IConfig['proxy'] = {
  '/mock/*': {
    target: 'http://zapi.in.zhihu.com',
    changeOrigin: true,
  },
  '/api/*': {
    target: 'https://ruban.dev.zhihu.com/',
    changeOrigin: true,
  },
};

export default proxy;
