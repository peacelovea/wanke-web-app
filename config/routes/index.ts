import { IConfig } from 'umi';
import business from './business';

const routes: IConfig['routes'] = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/login',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    component: '@/pages/Dashboard',
    name: '首页',
    icon: 'DashboardOutlined',
  },
  business,
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];

export default routes;
