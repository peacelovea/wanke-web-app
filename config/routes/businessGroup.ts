export default {
  path: '/business-group',
  name: '事业群',
  icon: 'SettingOutlined',
  routes: [
    {
      path: '/business-group',
      redirect: '/business-group/manage',
    },
    {
      path: '/business-group/manage',
      name: '事业群管理',
      component: './BusinessGroup',
    },
    {
      path: '/business-group/add',
      name: '新增',
      component: './BusinessGroup/BusinessGroupAdd',
    },
    {
      path: '/business-group/modify',
      name: '编辑',
      component: './BusinessGroup/BusinessGroupModify',
    },
    {
      path: '/business-group/detail',
      name: '详情',
      component: './BusinessGroup/BusinessGroupDetail',
    },
  ],
};
