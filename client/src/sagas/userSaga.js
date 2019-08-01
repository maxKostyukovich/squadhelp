import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { getUser, getAllUsers, updateBannedStatus } from "../api/rest/userController";
import _ from 'lodash';
import history from '../history';


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

export function* updateBannedUser({id, isBanned}) {
    try {
        yield updateBannedStatus(id, !isBanned);
        const store = yield select();
        const users = _.cloneDeep(store.userReducer.users);
        const indexSelectedUser = users.findIndex(u => u.id === id);
        if (indexSelectedUser > -1) {
            users[indexSelectedUser].isBanned = !isBanned;
            yield put({type: ACTION.GET_ALL_USERS_ADMIN_RESPONSE, users: users});
        } else {
            return new Error("No user");
        }

    } catch(err) {
        return err;
    }

}