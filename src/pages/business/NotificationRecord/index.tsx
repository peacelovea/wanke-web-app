import { makeProTableRequest } from '@/scripts/utils';
import { fetchNotificationRecordList } from '@/services/record';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProTable } from '@ant-design/pro-table';
import { useRef } from 'react';
import { NOTIFICATION_RECORD } from './settings';
import style from './index.less';

function NotificationAndAppealConfig() {
  const actionRef = useRef();

  const columns = [...NOTIFICATION_RECORD];

  const requestTable = (params: any) => {
    return makeProTableRequest(fetchNotificationRecordList)(params);
  };

  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="消息发送记录"
        rowKey="email"
        actionRef={actionRef}
        columns={columns}
        request={requestTable}
        scroll={{ x: 1300 }}
        search={{
          className: style.tableSearch,
          labelWidth: 'auto',
          span: 6,
        }}
      />
    </PageHeaderWrapper>
  );
}

export default NotificationAndAppealConfig;
