import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { checkLogin } from '../api/rest/restContoller';

export function* checkLoginUser({ data: newUser }){
  yield put({ type: ACTION.LOGIN_REQUEST });
  try{
    const { data }  = yield checkLogin(newUser);
    yield put({type:ACTION.LOGIN_RESPONSE, user: data.user});
  }catch(e){
    yield put({type: ACTION.LOGIN_ERROR, error: e});
  }
}