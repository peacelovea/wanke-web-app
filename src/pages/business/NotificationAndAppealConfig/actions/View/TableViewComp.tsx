import type { TableProps } from 'antd';
import { Table } from 'antd';

interface TableViewProps extends TableProps<any> {
  dataList: any[];
  columns: any[];
}

const TableView = ({ dataList, columns, ...props }: TableViewProps) => {
  return (
    <Table
      columns={columns}
      dataSource={dataList}
      pagination={{ hideOnSinglePage: true }}
      {...props}
    />
  );
};

export default TableView;
