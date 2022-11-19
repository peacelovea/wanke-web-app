// https://umijs.org/config/
import zhCN from 'antd/lib/locale/zh_CN';
import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  hash: true,
  forkTSChecker: {
    typescript: true,
    async: true,
  },
  antd: {
    config: {
      locale: zhCN,
    },
  },
  theme: {
    'card-actions-background': '#f5f8fa',
    'primary-color': '#08979c',
    'box-shadow-base':
      '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  layout: {},
  mock: {},
  title: false,
  ignoreMomentLocale: true,
  proxy,
  routes,
});
