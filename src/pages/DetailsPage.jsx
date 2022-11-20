import { getDetails } from '../store/actionCreators';
import React, { Suspense } from 'react';
import '../animations/fade-in.css';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Loading from '../components/Loading';
import '../styles/index.css';
import DetailsCard from '../components/DetailsCard';
import PropTypes from 'prop-types';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class DetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getDetails(this.props.params.id));
  }
  render() {
    return (
      <div className="wrapper">
        {this.props.details?.loading ? (
          <Loading />
        ) : this.props.details?.error ? (
          <ErrorAlert
            action={() => this.props.dispatch(getDetails(this.props.params.id))}
          />
        ) : (
          <DetailsCard data={this.props.details?.data} />
        )}
      </div>
    );
  }
}

DetailsPage.propTypes = {
  details: PropTypes.object,
  params: PropTypes.object,
};

export default withRouter(DetailsPage);
