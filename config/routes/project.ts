export default {
  path: '/project',
  name: '项目',
  icon: 'SettingOutlined',
  routes: [
    {
      path: '/project',
      redirect: '/project/manage',
    },
    {
      path: '/project/manage',
      name: '项目管理',
      component: './Project',
    },
    {
      path: '/project/add',
      name: '新增',
      component: './Project/ProjectAdd',
    },
    {
      path: '/project/modify',
      name: '编辑',
      component: './Project/ProjectModify',
    },
    {
      path: '/project/detail',
      name: '详情',
      component: './Project/ProjectDetail',
    },
  ],
};
