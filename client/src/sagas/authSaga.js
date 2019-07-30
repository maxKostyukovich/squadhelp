import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLogin, getUser, getAllUsers } from '../api/rest/restContoller';
import history from '../history';

export function* checkLoginUser({ data: newUser }){
  yield put({ type: ACTION.USER_REQUEST });
  try{
    const { data }  = yield checkLogin(newUser);
    yield put({type:ACTION.USER_RESPONSE, user: data.user});
    yield call(history.push,'/');
  }catch(e){
    yield put({type: ACTION.USER_ERROR, error: e});
  }
}

export function* logout() {
  yield put({type: ACTION.LOGOUT_REQUEST});
  localStorage.clear();
}

export function* getUserSaga() {
  yield put({ type: ACTION.USER_REQUEST });
  try{
    const { data } = yield getUser();
    yield put({type:ACTION.USER_RESPONSE, user: data});
  }catch (e) {
    yield put({type: ACTION.USER_ERROR, error: e})
  }
}

export function* getAllUsersAdmin() {
  yield put({ type: ACTION.USER_REQUEST });
  try{
    const { data } = yield getAllUsers();
    yield put({type: ACTION.GET_ALL_USERS_ADMIN_RESPONSE, users: data });
  } catch (e) {
    yield put({type: ACTION.USER_ERROR, error: e})
  }


}