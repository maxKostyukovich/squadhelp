import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLoginUser, logout, getUserSaga, getAllUsersAdmin } from './authSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
  yield takeLatest(ACTION.LOGOUT_ACTION, logout);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION.GET_ALL_USERS_ADMIN_ACTION, getAllUsersAdmin);
}

export default rootSaga;
