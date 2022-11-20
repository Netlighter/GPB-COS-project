import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import watchAll from './sagas';
import ServicesPage from '../pages/ServicesPage';
import DetailsPage from '../pages/DetailsPage';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;

export const ServicesPageC = connect((state) => {
  return state;
})(ServicesPage);

export const DetailsPageC = connect((state) => {
  return state;
})(DetailsPage);

sagaMiddleware.run(watchAll);

// TODO: variables
