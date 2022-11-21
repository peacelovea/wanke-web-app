import type { SubmitPanelProps } from '@/components/ProFormGo/SubmitPanel/interface';
import { Input, Select } from 'antd';

export const BUSINESS_GROUP = {
  key: 'id',
  dataIndex: 'id',
};

export const BUSINESS_NAME = {
  key: 'id',
  dataIndex: 'id',
};

export const SEARCH_BUSINESS_NAME = {
  key: 'id',
  dataIndex: 'id',
  renderFormItem: () => <Input placeholder="请输入公司名称" />,
  hideInTable: true,
};

export const CITY_BUSINESS_ENCODE = {
  title: '城市公司编号',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const CITY_BUSINESS_NAME = {
  title: '城市公司简称',
  key: 'id',
  dataIndex: 'id',
  hideInSearch: true,
};

export const CITY_BUSINESS_ADDRESS = {
  title: '城市公司地址',
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
      <a href="/city-company/modify" style={{ marginRight: 10 }}>
        修改
      </a>

      <a href="/city-company/modify">删除</a>
    </>
  ),
};

export const CITY_BUSINESS_MANAGE = [
  {
    ...BUSINESS_GROUP,
    renderFormItem: () => <Select defaultValue="所有事业群" />,
  },
  {
    ...BUSINESS_NAME,
    renderFormItem: () => <Select defaultValue="所有城市公司" />,
  },
  SEARCH_BUSINESS_NAME,
  CITY_BUSINESS_ENCODE,
  CITY_BUSINESS_NAME,
  CITY_BUSINESS_ADDRESS,
  OPTIONS,
];

export const CITY_BUSINESS_ADD: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '新增城市公司',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormSimpleSelect',
        label: '事业群',
        defaultValue: '请选择事业群',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 8,
      },
      {
        ...BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司名称',
        placeholder: '请填写城市公司名称',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 8,
      },
      {
        ...CITY_BUSINESS_ENCODE,
        type: 'FormInputText',
        label: '事业群别名',
        name: 'id',
        colSpan: 8,
        placeholder: '系统自动生成',
        disabled: true,
      },
      {
        ...CITY_BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司简称',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司简称',
      },
      {
        ...CITY_BUSINESS_ADDRESS,
        type: 'FormInputText',
        label: '城市公司地址',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司地址',
      },
      {
        ...CITY_BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司别名',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司别名',
      },
    ],
  },
];

export const CITY_BUSINESS_MODIFY: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '新增城市公司',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormSimpleSelect',
        label: '事业群',
        defaultValue: '请选择事业群',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 8,
      },
      {
        ...BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司名称',
        placeholder: '请填写城市公司名称',
        name: 'id',
        rules: [{ required: true, message: '请选择事业群' }],
        colSpan: 8,
      },
      {
        ...CITY_BUSINESS_ENCODE,
        type: 'FormInputText',
        label: '事业群别名',
        name: 'id',
        colSpan: 8,
        placeholder: '系统自动生成',
        disabled: true,
      },
      {
        ...CITY_BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司简称',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司简称',
      },
      {
        ...CITY_BUSINESS_ADDRESS,
        type: 'FormInputText',
        label: '城市公司地址',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司地址',
      },
      {
        ...CITY_BUSINESS_NAME,
        type: 'FormInputText',
        label: '城市公司别名',
        name: 'id',
        colSpan: 8,
        placeholder: '请填写城市公司别名',
      },
    ],
  },
];

export const CITY_BUSINESS_DETAIL: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '城市公司详情',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormText',
        label: '事业群',
        title: '阳光智博',
        name: 'id',
        colSpan: 12,
      },
      {
        ...BUSINESS_NAME,
        type: 'FormText',
        label: '城市公司名称',
        title: '华东一区',
        name: 'id',
        colSpan: 12,
      },
      {
        ...CITY_BUSINESS_ENCODE,
        type: 'FormText',
        label: '事业群别名',
        title: 'G011Z003',
        name: 'id',
        colSpan: 12,
        placeholder: '系统自动生成',
        disabled: true,
      },
      {
        ...CITY_BUSINESS_ADDRESS,
        type: 'FormText',
        label: '城市公司地址',
        title: '城市公司地址',
        name: 'id',
        colSpan: 12,
      },
      {
        ...CITY_BUSINESS_NAME,
        type: 'FormText',
        label: '城市公司别名',
        title: '城市公司别名',
        name: 'id',
        colSpan: 12,
      },
    ],
  },
];
