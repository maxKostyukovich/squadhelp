import ACTION from './actiontsTypes';
import connect from 'react-redux/es/connect/connect';
export const loginAction = (data) => ({
  type: ACTION.LOGIN_ACTION,
  data,
});

export const logoutAction = (data) => ({
  type: ACTION.LOGOUT_ACTION,
  data,
});

export const getUserAction = () => ({
  type: ACTION.GET_USER_ACTION,
});

export const getAllUserAction = () => ({
  type: ACTION.GET_ALL_USERS_ADMIN_ACTION,
});

export const bannedUserAction = (id, isBanned) => ({
  type:ACTION.BANNED_USER_ACTION,
  id,
  isBanned,
});