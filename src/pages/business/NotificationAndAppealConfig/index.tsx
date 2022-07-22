import Create from '@/pages/business/NotificationAndAppealConfig/actions/Create';
import { makeProTableRequest } from '@/scripts/utils';
import { fetchConfigList } from '@/services';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProTable } from '@ant-design/pro-table';
import { useRef } from 'react';
import { NOTIFICATION_APPEAL_CONFIG_COLUMNS, OPERATIONS } from './settings';
import Actions from '@/pages/business/NotificationAndAppealConfig/actions';

function NotificationAndAppealConfig() {
  const actionRef = useRef();

  const columns = [
    ...NOTIFICATION_APPEAL_CONFIG_COLUMNS,
    {
      ...OPERATIONS,
      hideInSearch: true,
      render: (_: any, record: { id: string }) => (
        <Actions id={record.id} data={record} actionRef={actionRef?.current} />
      ),
    },
  ];

  const requestTable = (params: any) => {
    return makeProTableRequest(fetchConfigList)(params);
  };

  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="通知与申诉配置列表"
        rowKey="email"
        actionRef={actionRef}
        columns={columns}
        request={requestTable}
        search={{
          labelWidth: 'auto',
          span: 6,
        }}
        toolBarRender={() => [<Create actionRef={actionRef.current} />]}
      />
    </PageHeaderWrapper>
  );
}

export default NotificationAndAppealConfig;
