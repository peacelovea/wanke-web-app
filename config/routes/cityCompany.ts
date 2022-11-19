export default {
  path: '/city-company',
  name: '城市管理',
  icon: 'SettingOutlined',
  routes: [
    {
      path: '/city-company',
      redirect: '/city-company/manage',
    },
    {
      path: '/city-company/manage',
      name: '事业群管理',
      component: './CityCompany',
    },
    {
      path: '/city-company/add',
      name: '事业群新增',
      component: './CityCompany/CityCompanyAdd',
    },
    {
      path: '/city-company/modify',
      name: '事业群修改',
      component: './CityCompany/CityCompanyModify',
    },
    {
      path: '/city-company/detail',
      name: '事业群详情',
      component: './CityCompany/CityCompanyDetail',
    },
  ],
};
