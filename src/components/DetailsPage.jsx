import { getDetails, getServices } from '../store/actionCreators';
import React from 'react';
import '../animations/fade-in.css';
import { Card, Spin, Alert, Button } from 'antd';
import { useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};

class DetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getDetails(this.props.params.id));
  }

  render() {
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
                // onClick={(e) => {
                //   this.props.dispatch(getServices());
                // }}
              >
                Try again
              </Button>
            }
          />
        ) : (
          <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      {this.props.details?.map((el) => (
        <p>{el}</p>
      ))}
    </Card>
        )}
      </div>
    );
  }
}
//TODO: proptypes!!!

export default withRouter(DetailsPage);
