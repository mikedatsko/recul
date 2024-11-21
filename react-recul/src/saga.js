import { call, all, put, takeEvery } from 'redux-saga/effects';
import http from './http';
import {
  APP_CREATE_REQUEST,
  APP_CREATE_SUCCESS,
  APP_CREATE_FAILURE,
  APP_READ_REQUEST,
  APP_READ_SUCCESS,
  APP_READ_FAILURE,
  APP_UPDATE_REQUEST,
  APP_UPDATE_SUCCESS,
  APP_UPDATE_FAILURE,
  APP_REMOVE_REQUEST,
  APP_REMOVE_SUCCESS,
  APP_REMOVE_FAILURE
} from './Cora.actions';

function* fetchCreate(action) {
  try {
    const response = yield call(http.post, action.payload.path, action.payload);
    yield put({
      type: APP_CREATE_SUCCESS,
      payload: { propName: action.payload.propName, response }
    });
  } catch (e) {
    yield put({
      type: APP_CREATE_FAILURE,
      payload: { propName: action.payload.propName, error: e.message }
    });
  }
}

function* fetchRead(action) {
  try {
    const response = yield call(http.get, action.payload.path, action.payload);
    yield put({
      type: APP_READ_SUCCESS,
      payload: { propName: action.payload.propName, response }
    });
  } catch (e) {
    yield put({
      type: APP_READ_FAILURE,
      payload: { propName: action.payload.propName, error: e.message }
    });
  }
}

function* fetchUpdate(action) {
  try {
    const response = yield call(http.put, action.payload.path, action.payload);
    yield put({
      type: APP_UPDATE_SUCCESS,
      payload: { propName: action.payload.propName, response }
    });
  } catch (e) {
    yield put({
      type: APP_UPDATE_FAILURE,
      payload: { propName: action.payload.propName, error: e.message }
    });
  }
}

function* fetchRemove(action) {
  try {
    const response = yield call(
      http.delete,
      action.payload.path,
      action.payload
    );
    yield put({
      type: APP_REMOVE_SUCCESS,
      payload: { propName: action.payload.propName, response }
    });
  } catch (e) {
    yield put({
      type: APP_REMOVE_FAILURE,
      payload: { propName: action.payload.propName, error: e.message }
    });
  }
}

function* watchCreate() {
  yield takeEvery(APP_CREATE_REQUEST, fetchCreate);
}

function* watchRead() {
  yield takeEvery(APP_READ_REQUEST, fetchRead);
}

function* watchUpdate() {
  yield takeEvery(APP_UPDATE_REQUEST, fetchUpdate);
}

function* watchRemove() {
  yield takeEvery(APP_REMOVE_REQUEST, fetchRemove);
}

export default function* () {
  yield all([watchCreate(), watchRead(), watchUpdate(), watchRemove()]);
}
