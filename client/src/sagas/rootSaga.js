import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLoginUser } from './loginSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
}

export default rootSaga;
