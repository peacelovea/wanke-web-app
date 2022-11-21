import type { SubmitPanelProps } from '@/components/ProFormGo/SubmitPanel/interface';
import { Input, Select } from 'antd';

export const SEARCH_PROJECT = {
  key: 'id',
  dataIndex: 'id',
  renderFormItem: () => <Select defaultValue="请选择项目" />,
  hideInTable: true,
};

export const SEARCH_PROJECT_NAME = {
  key: 'id',
  dataIndex: 'id',
  renderFormItem: () => <Input defaultValue="请输入项目名称(建筑)" />,
  hideInTable: true,
};

export const PROJECT = {
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const PROJECT_LITTLE_NAME = {
  title: '事业群',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const BELONGED_CITY_BUSINESS = {
  title: '所属城市公司',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const PROJECT_NAME = {
  title: '项目名称(建筑)',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const MONEY_PACKAGE = {
  title: '资产包',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const TAX_TYPE = {
  title: '纳税类型',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const IS_UP = {
  title: '是否上线IPMP',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const OPTIONS = {
  title: '操作',
  dataIndex: 'id',
  hideInSearch: true,
  // width: COLUMN_WIDTH_GO.s,
  renderText: () => (
    <>
      <a href="/project/modify" style={{ marginRight: 10 }}>
        修改
      </a>

      <a href="/project/modify">删除</a>
    </>
  ),
};

export const SEARCH_PROJECT_MANAGE = [SEARCH_PROJECT, SEARCH_PROJECT_NAME];

export const PROJECT_MANAGE = [
  ...SEARCH_PROJECT_MANAGE,
  PROJECT,
  PROJECT_LITTLE_NAME,
  BELONGED_CITY_BUSINESS,
  PROJECT_NAME,
  MONEY_PACKAGE,
  TAX_TYPE,
  IS_UP,
  OPTIONS,
];

export const PROJECT_ADD: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '基本信息',
    children: [
      {
        ...PROJECT_NAME,
        type: 'FormSimpleSelect',
        label: '项目名称(建筑)',
        defaultValue: '请选择项目名称',
        name: 'id',
        rules: [{ required: true, message: '请选择项目名称' }],
        colSpan: 12,
      },
      {
        ...PROJECT_NAME,
        type: 'FormInputText',
        label: '项目简称(建筑)',
        placeholder: '请填写城市公司名称',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 12,
      },
      {
        ...PROJECT_NAME,
        type: 'FormInputText',
        label: '项目编码',
        name: 'id',
        colSpan: 12,
        placeholder: '系统自动生成',
        disabled: true,
      },
      {
        ...PROJECT_NAME,
        type: 'FormSimpleSelect',
        label: '所属事业群',
        name: 'id',
        colSpan: 12,
        defaultValue: '请选择所属事业群',
        disabled: true,
      },
    ],
  },
  {
    type: 'ProFormGroup',
    title: '系统配置',
    children: [
      {
        ...PROJECT_NAME,
        type: 'FormSimpleSelect',
        label: '是否上线IPMP',
        defaultValue: '未启动',
        name: 'id',
        rules: [{ required: true, message: '请选择是否上线IPMP' }],
        colSpan: 12,
      },
      {
        ...PROJECT_NAME,
        type: 'FormSimpleSelect',
        label: '是否做账',
        defaultValue: '否',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 12,
        disabled: true,
      },
      {
        ...PROJECT_NAME,
        type: 'FormSimpleSelect',
        label: '是否合并考核',
        defaultValue: '否',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 12,
        disabled: true,
      },
    ],
  },
];

export const PROJECT_BUSINESS_MESSAGE = [
  {
    title: '合同对象类型',
    key: 'id',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '公司信息',
    key: 'id',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '是否对接外部财务系统',
    key: 'id',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '系统名称',
    key: 'id',
    dataIndex: 'id',
    hideInSearch: true,
  },
];

// export const PROJECT_MODIFY: SubmitPanelProps['formGroups'] = [
//   {
//     type: 'ProFormGroup',
//     title: '新增城市公司',
//     children: [
//       {
//         ...BUSINESS_GROUP,
//         type: 'FormSimpleSelect',
//         label: '事业群',
//         defaultValue: '请选择事业群',
//         name: 'id',
//         rules: [{ required: true, message: '请选择事业群' }],
//         colSpan: 8,
//       },
//       {
//         ...BUSINESS_NAME,
//         type: 'FormInputText',
//         label: '城市公司名称',
//         placeholder: '请填写城市公司名称',
//         name: 'id',
//         rules: [{ required: true, message: '请选择事业群' }],
//         colSpan: 8,
//       },
//       {
//         ...CITY_BUSINESS_ENCODE,
//         type: 'FormInputText',
//         label: '事业群别名',
//         name: 'id',
//         colSpan: 8,
//         placeholder: '系统自动生成',
//         disabled: true
//       },
//       {
//         ...CITY_BUSINESS_NAME,
//         type: 'FormInputText',
//         label: '城市公司简称',
//         name: 'id',
//         colSpan: 8,
//         placeholder: '请填写城市公司简称',
//       },
//       {
//         ...CITY_BUSINESS_ADDRESS,
//         type: 'FormInputText',
//         label: '城市公司地址',
//         name: 'id',
//         colSpan: 8,
//         placeholder: '请填写城市公司地址',
//       },
//       {
//         ...CITY_BUSINESS_NAME,
//         type: 'FormInputText',
//         label: '城市公司别名',
//         name: 'id',
//         colSpan: 8,
//         placeholder: '请填写城市公司别名',
//       },
//     ],
//   },
// ];

// export const PROJECT_DETAIL: SubmitPanelProps['formGroups'] = [
//   {
//     type: 'ProFormGroup',
//     title: '城市公司详情',
//     children: [
//       {
//         ...BUSINESS_GROUP,
//         type: 'FormText',
//         label: '事业群',
//         title: '阳光智博',
//         name: 'id',
//         colSpan: 12,
//       },
//       {
//         ...BUSINESS_NAME,
//         type: 'FormText',
//         label: '城市公司名称',
//         title: '华东一区',
//         name: 'id',
//         colSpan: 12,
//       },
//       {
//         ...CITY_BUSINESS_ENCODE,
//         type: 'FormText',
//         label: '事业群别名',
//         title: 'G011Z003',
//         name: 'id',
//         colSpan: 12,
//         placeholder: '系统自动生成',
//         disabled: true
//       },
//       {
//         ...CITY_BUSINESS_ADDRESS,
//         type: 'FormText',
//         label: '城市公司地址',
//         title: '城市公司地址',
//         name: 'id',
//         colSpan: 12,
//       },
//       {
//         ...CITY_BUSINESS_NAME,
//         type: 'FormText',
//         label: '城市公司别名',
//         title: '城市公司别名',
//         name: 'id',
//         colSpan: 12,
//       },
//     ],
//   },
// ];
