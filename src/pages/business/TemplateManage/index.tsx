import { makeProTableRequest } from '@/scripts/utils';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProTable } from '@ant-design/pro-table';
import { useRef } from 'react';
import { TEMPLATE_MANAGE_COLUMNS, OPERATIONS } from './settings';
import { fetchTemplateList } from '@/services/template';
import { history } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import Actions from '@/pages/business/TemplateManage/actions';
import PermissionButton from '@/components/PermissionButton';

function TemplateManage() {
  const actionRef = useRef();

  const columns = [
    ...TEMPLATE_MANAGE_COLUMNS,
    {
      ...OPERATIONS,
      fixed: 'right',
      width: 150,
      render: (_: any, record: { id: number }) => (
        <Actions id={record.id} data={record} actionRef={actionRef?.current} />
      ),
    },
  ];

  const requestTable = (params: any) => {
    return makeProTableRequest(fetchTemplateList)(params);
  };

  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="通知模板列表"
        scroll={{ x: 'max-content' }}
        rowKey="email"
        actionRef={actionRef}
        columns={columns as any}
        request={requestTable}
        search={{
          labelWidth: 'auto',
          span: 6,
        }}
        toolBarRender={() => [
          <PermissionButton
            componentType="button"
            type="primary"
            accessId="/business/template-manage:add"
            onClick={() => history.push('/business/template-manage/create')}
          >
            <PlusOutlined />
            新建
          </PermissionButton>,
        ]}
      />
    </PageHeaderWrapper>
  );
}

export default TemplateManage;
