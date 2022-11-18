import { getServices } from '../../store/actionCreators';
import React from 'react';
import '../../animations/fade-in.css';
import { Table, Spin, Alert, Button } from 'antd';

class ServicesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getServices());
  }

  render() {
    const tableData = [];
    const tableColumns = [];
    const fields = ['id', 'name', 'price'];

    fields.forEach((item) => {
      tableColumns.push({
        title: item,
        dataIndex: item,
        key: item,
      });
    });

    this.props.data?.forEach((item, index) => {
      tableData.push({ ...item, key: index + 1 });
    });

    // TODO: ошибка не всегда срабатывает

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.props.loading ? (
          <Spin size="large" style={{ margin: '4rem' }} />
        ) : this.props.error ? (
          <Alert
            className="fade-in"
            style={{ margin: '4rem' }}
            message="Something goes wrong"
            showIcon
            description=""
            type="error"
            action={
              <Button
                size="small"
                danger
                onClick={(e) => {
                  this.props.dispatch(getServices());
                }}
              >
                Try again
              </Button>
            }
          />
        ) : (
          <Table
            dataSource={tableData}
            columns={tableColumns}
            size="small"
            bordered={true}
          ></Table>
        )}
      </div>
    );
  }
}
//TODO: proptypes!!!

export default ServicesPage;
