import PageTitle from '@/components/PageTitle';
import { SubmitPanel } from '@/components/ProFormGo';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { PROJECT_ADD, PROJECT_BUSINESS_MESSAGE } from '../setting';

const CityCompanyAdd = () => {
  const columns: ProTableGoColumns[] = [...PROJECT_BUSINESS_MESSAGE];

  const tableListDataSource: Member[] = [];
  for (let i = 0; i < 100; i += 1) {
    tableListDataSource.push({
      id: `${102047 + i}`,
    });
  }

  const onFinish = () => {
    console.log('onFinish');
  };
  return (
    <PageHeaderWrapper>
      <PageTitle title="新增项目" />
      <SubmitPanel action="add" formGroups={PROJECT_ADD} onFinish={onFinish} />
      <ProTable
        columns={columns}
        rowKey="id"
        // request={requestTable}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        scroll={{ x: 'max-content' }}
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

export default CityCompanyAdd;
