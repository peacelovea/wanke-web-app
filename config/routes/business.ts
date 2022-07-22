export default {
  path: '/business',
  name: '业务自动化2.0',
  icon: 'SettingOutlined',
  routes: [
    {
      path: '/business',
      redirect: '/business/notification-appeal-config',
    },
    {
      path: '/business/notification-appeal-config',
      icon: 'SettingOutlined',
      name: '通知与申诉配置',
      component: './business/NotificationAndAppealConfig',
      access: 'accessRouteFilter',
    },
    {
      path: '/business/notification-appeal-config/edit/:id',
      icon: 'SettingOutlined',
      name: '通知与申诉配置-编辑',
      component: './business/NotificationAndAppealConfig/actions/Edit',
      hideInMenu: true,
    },
    {
      path: '/business/template-manage',
      icon: 'SettingOutlined',
      name: '通知模板管理',
      component: './business/TemplateManage',
      access: 'accessRouteFilter',
    },
    {
      path: '/business/template-manage/create',
      icon: 'SettingOutlined',
      name: '通知模板-新建',
      component: './business/TemplateManage/actions/Create',
      hideInMenu: true,
    },
    {
      path: '/business/template-manage/edit/:id',
      icon: 'SettingOutlined',
      name: '通知模板-编辑',
      component: './business/TemplateManage/actions/Edit',
      hideInMenu: true,
    },
    {
      path: '/business/notificationRecord',
      icon: 'SettingOutlined',
      name: '通知记录查询',
      component: './business/NotificationRecord',
      access: 'accessRouteFilter',
    },
  ],
};
