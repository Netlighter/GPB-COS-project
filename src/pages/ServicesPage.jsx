import { getDetails, getServices } from '../store/actionCreators';
import React from 'react';
import '../animations/fade-in.css';
import { Table, Spin, Alert, Button } from 'antd';
import { Link } from 'react-router-dom';

class ServicesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getServices());
  }

  render() {
    const fields = ['id', 'name', 'price']

    const tableColumns = fields.map((item) => {
      return {
        title: item,
        dataIndex: item,
        key: item,
        render:
          item == 'id'
            ? (id) => (
                <Link to={`/details/${id}`}>
                  {id}
                  {this.props.children}
                </Link>
              )
            : null,
      };
    });

    const tableData = this.props.services?.data.map((item, index) => {
      return { ...item, key: index + 1 };
    });

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.props.services?.loading ? (
          <Spin size="large" style={{ margin: '4rem' }} />
        ) : this.props.services?.error ? (
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
            style={{ margin: '4rem' }}
          ></Table>
        )}
      </div>
    );
  }
}
//TODO: proptypes!!!

export default ServicesPage;
