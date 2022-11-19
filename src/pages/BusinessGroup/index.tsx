import { makeProTableRequest } from '@/scripts/utils';
import { fetchConfigList } from '@/services/business';
import { ProTable } from '@ant-design/pro-table';
import { useRef } from 'react';
import { BUSINESS_GROUP_MANAGEMENT } from './setting';
import { history } from 'umi';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PageTitle from '@/components/PageTitle';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const BusinessGroupManagement = () => {
  const actionRef = useRef<any>();
  const columns: ProTableGoColumns[] = [...BUSINESS_GROUP_MANAGEMENT];
  const requestTable = (params: any) => {
    return makeProTableRequest(fetchConfigList)(params);
  };

  const goCreating = () => {
    const url = `/business-group/add`;
    history.push(url);
  };
  return (
    <PageHeaderWrapper>
      <PageTitle title="事业群管理" />
      <ProTable
        columns={columns}
        rowKey="id"
        request={requestTable}
        toolBarRender={() => [
          <Button type="primary" onClick={goCreating}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
        scroll={{ x: 'max-content' }}
        actionRef={actionRef}
        columnsStateMap={{
          id: { fixed: 'left' },
          actions: { fixed: 'right' },
        }}
        search={{
          defaultCollapsed: false,
        }}
      />
    </PageHeaderWrapper>
  );
};

export default BusinessGroupManagement;
