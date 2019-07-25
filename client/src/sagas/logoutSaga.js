import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

export function* logout() {
        yield put({type: ACTION.LOGOUT_REQUEST});
}