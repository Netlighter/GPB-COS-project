import { getDetails, getServices } from '../store/actionCreators';
import React from 'react';
import '../animations/fade-in.css';
import { Card, Spin, Alert, Button } from 'antd';
import { useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class DetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getDetails(this.props.params.id));
    console.log(this.props)
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.props.details?.loading ? (
          <Spin size="large" style={{ margin: '4rem' }} />
        ) : this.props.details?.error ? (
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
                  this.props.dispatch(getDetails(this.props.params.id));
                }}
              >
                Try again
              </Button>
            }
          />
        ) : (
          <Card
            title={this.props.details?.data.name}
            style={{
              width: 300,
              margin: '4rem'
            }}
          >
            {this.props.details && Object.entries(this.props.details?.data).map(([key, value]) => (
              <p key={key}><b>{key}</b>: {value}</p>
              
            ))}
          </Card>
        )}
      </div>
    );
  }
}
// TODO: localization?
//TODO: proptypes!!!

export default withRouter(DetailsPage);
