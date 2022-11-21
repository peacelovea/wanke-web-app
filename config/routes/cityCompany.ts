export default {
  path: '/city-company',
  name: '城市公司',
  icon: 'SettingOutlined',
  routes: [
    {
      path: '/city-company',
      redirect: '/city-company/manage',
    },
    {
      path: '/city-company/manage',
      name: '城市公司管理',
      component: './CityCompany',
    },
    {
      path: '/city-company/add',
      name: '新增',
      component: './CityCompany/CityCompanyAdd',
    },
    {
      path: '/city-company/modify',
      name: '编辑',
      component: './CityCompany/CityCompanyModify',
    },
    {
      path: '/city-company/detail',
      name: '详情',
      component: './CityCompany/CityCompanyDetail',
    },
  ],
};
