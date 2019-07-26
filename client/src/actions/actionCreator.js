import ACTION from './actiontsTypes';
import connect from 'react-redux/es/connect/connect';
export const loginAction = (data) => ({
  type: ACTION.LOGIN_ACTION,
  data,
});

export const logoutAction = () => ({
  type: ACTION.LOGOUT_ACTION,
});

export const getUserAction = () => ({
  type: ACTION.GET_USER_ACTION,
});