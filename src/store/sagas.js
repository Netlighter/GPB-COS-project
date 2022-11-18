import { call, put, takeEvery } from 'redux-saga/effects'

import { 
    requestServices, 
    requestServicesError, 
    requestServicesSuccess 
} from './actionCreators';

function* fetchServicesAsync() {
    try {
      yield put(requestServices());
      const response = yield call(() => {
        return fetch('http://localhost:7070/api/services')
                .then(resp => resp.json())
        }
      );
      console.log(response)
      yield put(requestServicesSuccess(response));
    } catch (error) {
      yield put(requestServicesError());
    }
  }

function* watchGetServices() {
  yield takeEvery("GET_SERVICES", fetchServicesAsync);
}


export default watchGetServices;