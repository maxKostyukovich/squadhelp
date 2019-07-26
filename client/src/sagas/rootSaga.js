import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLoginUser, logout, getUserSaga } from './authSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
  yield takeLatest(ACTION.LOGOUT_ACTION, logout);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
}

export default rootSaga;
