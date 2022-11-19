import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import watchAll from './sagas';
import ServicesPage from '../components/ServicesPage';
import DetailsPage from '../components/DetailsPage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;

export const ServicesPageC = connect((state) => {
  return state;
})(ServicesPage);

export const DetailsPageC = connect((state) => {
  return state;
})(DetailsPage);

sagaMiddleware.run(watchAll);
