import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestServices,
  requestServicesError,
  requestServicesSuccess,
} from './actionCreators';

function* fetchServicesAsync() {
  try {
    yield put(requestServices());
    const response = yield call(() => {
      return fetch('http://localhost:7070/api/services').then((resp) =>
        resp.json()
      );
    });
    yield put(requestServicesSuccess(response));
  } catch (error) {
    yield put(requestServicesError());
  }
}

function* watchGetServices() {
  yield takeLatest('GET_SERVICES', fetchServicesAsync);
}

export default watchGetServices;
