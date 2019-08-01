import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLoginUser, logout } from './authSaga';
import { getUserSaga, getAllUsersAdmin, updateBannedUser  } from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
  yield takeLatest(ACTION.LOGOUT_ACTION, logout);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION.GET_ALL_USERS_ADMIN_ACTION, getAllUsersAdmin);
  yield takeLatest(ACTION.BANNED_USER_ACTION, updateBannedUser);
}

export default rootSaga;
