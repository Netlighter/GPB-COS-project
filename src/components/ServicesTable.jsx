import { Table } from 'antd';

export default function ServicesTable({ data }) {
  return (
    <Table
      dataSource={data.tableData}
      columns={data.tableColumns}
      size="small"
      bordered={true}
    ></Table>
  );
}

