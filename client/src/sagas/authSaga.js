import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLogin, deleteToken } from '../api/rest/restContoller';
import { createUser } from "../api/rest/userController";
import history from '../history';

export function* checkLoginUser({ data: newUser }){
  yield put({ type: ACTION.USER_REQUEST });
  try{
    const { data }  = yield checkLogin(newUser);
    yield put({type:ACTION.USER_RESPONSE, user: data.user});
    yield call(history.push,'/');
  }catch(err){
    yield put({type: ACTION.USER_ERROR, err: {
        message: err.response.data,
        status:err.response.status,
      } });
  }
}

export function* logout({ data: token }) {
  yield put({type: ACTION.LOGOUT_REQUEST});
  localStorage.clear();
  const res = yield deleteToken(token);
}

export function* createUserSaga({ user }){
  const {passwordConformation, ...newUser}  = user;
  yield put({ type:ACTION.USER_REQUEST });
  try{
    const { data } = yield createUser(newUser);
      yield put({type: ACTION.USER_RESPONSE, user: data.user});
      yield call(history.push, '/');
  } catch(err) {
    console.log("in catch");
      yield put({ type: ACTION.USER_ERROR, err: {
        message: err.response.data,
        status:err.response.status,
        }
      });
  }
}
