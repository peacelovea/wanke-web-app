// umi proxy: https://umijs.org/zh-CN/config#proxy
import { IConfig } from 'umi';

const proxy: IConfig['proxy'] = {
  '/mock/*': {
    target: 'https://zapi.in.zhihu.com',
    changeOrigin: true,
  },
  '/api/*': {
    target: 'https://ruban.in.zhihu.com/',
    changeOrigin: true,
  },
};

export default proxy;
