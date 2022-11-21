import { IConfig } from 'umi';
import businessGroup from './businessGroup';
import cityCompany from './cityCompany';
import project from './project';
const routes: IConfig['routes'] = [
  {
    path: '/home',
    component: '@/pages/Home',
    name: '首页',
    icon: 'DashboardOutlined',
  },
  businessGroup,
  cityCompany,
  project,
  {
    path: '/',
    redirect: '/Home',
  },
  {
    component: './404',
  },
];

export default routes;
