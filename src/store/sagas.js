import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  requestDetails,
  requestDetailsError,
  requestDetailsSuccess,
  requestServices,
  requestServicesError,
  requestServicesSuccess,
} from './actionCreators';
import { GET_DETAILS, GET_SERVICES } from './actionTypes';

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

function* fetchDetailsAsync(action) {
  try {
    yield put(requestDetails());
    const response = yield call((id) => {
      return fetch(`http://localhost:7070/api/services/${id}`).then((resp) =>
        resp.json()
      );
    }, action.id);
    yield put(requestDetailsSuccess(response));
  } catch (error) {
    yield put(requestDetailsError());
  }
}

function* watchAll() {
  yield all([
    takeLatest(GET_SERVICES, fetchServicesAsync),
    takeLatest(GET_DETAILS, fetchDetailsAsync),
  ]);
}
export default watchAll;
