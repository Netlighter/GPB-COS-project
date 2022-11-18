import { getServices } from '../../store/actionCreators';
import React from 'react';

class ServicesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getServices())
    console.log('wtf')
  }

  render() {
  return (
    <div>
      {this.props.loading 
        ? <p>Loading...</p> 
        : this.props.error
            ? <p>Error, try again</p>
            :
            this.props.data?.map((service) => 
            (
              <p key={service.id}>
                {service.name} | {service.price}
              </p>
            )
            )
            }
  </div>
  );}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getServices: () => dispatch(getServices()), 
//     dispatch
//   }
// }

// const connectedApp = connect(mapStateToProps)(ServicesPage);
// export { connectedApp as ServicesPage }

export default ServicesPage;

