import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLoginUser } from './loginSaga';
import { logout } from "./logoutSaga";

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
  yield takeLatest(ACTION.LOGOUT_ACTION, logout);
}

export default rootSaga;
