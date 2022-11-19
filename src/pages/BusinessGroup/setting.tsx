import type { SubmitPanelProps } from '@/components/ProFormGo/SubmitPanel/interface';

export const TEST = {
  title: 'ID',
  key: 'id',
  dataIndex: 'id',
  hideInTable: true,
};

export const BUSINESS_GROUP = {
  title: '事业群',
  dataIndex: 'id',
  // width: COLUMN_WIDTH_GO.s,
};

export const BUSINESS_ENCODE = {
  title: '事业群编码',
  dataIndex: 'id',
  hideInSearch: true,
  // width: COLUMN_WIDTH_GO.s,
};

export const CREATE_PERSON = {
  title: '创建人',
  dataIndex: 'id',
  hideInSearch: true,
  // width: COLUMN_WIDTH_GO.s,
};

export const CREATE_TIME = {
  title: '创建时间',
  dataIndex: 'id',
  hideInSearch: true,
  // width: COLUMN_WIDTH_GO.s,
};

export const OPTIONS = {
  title: '操作',
  dataIndex: 'id',
  hideInSearch: true,
  // width: COLUMN_WIDTH_GO.s,
  renderText: () => (
    <>
      <a href="/business-group/modify" style={{ marginRight: 10 }}>
        修改
      </a>

      <a href="/business-group/modify">删除</a>
    </>
  ),
};

export const BUSINESS_GROUP_MANAGEMENT = [
  BUSINESS_GROUP,
  BUSINESS_ENCODE,
  CREATE_PERSON,
  CREATE_TIME,
  OPTIONS,
];

export const BUSINESS_GROUP_ADD: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '新增事业群',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群',
        name: 'id',
        rules: [{ required: true, message: '请输入事业群' }],
        colSpan: 8,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群编码',
        name: 'id',
        colSpan: 8,
        placeholder: '系统自动生成',
        disabled: true,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群别名',
        name: 'id',
        colSpan: 8,
      },
    ],
  },
];

export const BUSINESS_GROUP_MODIFY: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '编辑事业群',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群',
        name: 'id',
        rules: [{ required: true, message: '请输入事业群' }],
        colSpan: 8,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群编码',
        name: 'id',
        colSpan: 8,
        disabled: true,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormInputText',
        label: '事业群别名',
        name: 'id',
        colSpan: 8,
      },
    ],
  },
];

export const BUSINESS_GROUP_DETAIL: SubmitPanelProps['formGroups'] = [
  {
    type: 'ProFormGroup',
    title: '事业群信息',
    children: [
      {
        ...BUSINESS_GROUP,
        type: 'FormText',
        label: '事业群',
        name: 'id',
        rules: [{ required: true, message: '请输入事业群' }],
        colSpan: 8,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormText',
        label: '事业群编码',
        name: 'id',
        colSpan: 8,
      },
      {
        ...BUSINESS_GROUP,
        type: 'FormText',
        label: '事业群别名',
        name: 'id',
        colSpan: 8,
      },
    ],
  },
];
