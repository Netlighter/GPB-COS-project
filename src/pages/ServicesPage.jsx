import { getServices } from '../store/actionCreators';
import React from 'react';
import '../animations/fade-in.css';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorAlert from '../components/ErrorAlert';
import '../styles/index.css';
import ServicesTable from '../components/ServicesTable';
import PropTypes from 'prop-types';

class ServicesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getServices());
  }

  render() {
    const fields = ['id', 'name', 'price'];
    const tableColumns = fields.map((item) => {
      return {
        title: item,
        dataIndex: item,
        key: item,
        render:
          item == 'id' ? (id) => <Link to={`/details/${id}`}>{id}</Link> : null,
      };
    });

    const tableData = this.props.services?.data.map((item, index) => {
      return { ...item, key: index + 1 };
    });

    return (
      <div className="wrapper">
        {this.props.services?.loading ? (
          <Loading />
        ) : this.props.services?.error ? (
          <ErrorAlert action={() => this.props.dispatch(getServices())} />
        ) : (
          <ServicesTable data={{ tableData, tableColumns }} />
        )}
      </div>
    );
  }
}

ServicesPage.propTypes = {
  services: PropTypes.object,
};

export default ServicesPage;
