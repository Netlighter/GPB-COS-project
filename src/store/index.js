import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import watchGetServices from './sagas'
import ServicesPage from '../components/ServicesPage/ServicesPage'

const sagaMiddleware = createSagaMiddleware()

const store = createStore (
    reducer,
    applyMiddleware(sagaMiddleware)
)

export default store

export const ServicesPageC = connect((state) => {
    return state;
  })(ServicesPage);

sagaMiddleware.run(watchGetServices)
