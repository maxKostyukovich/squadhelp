import ACTION from './actiontsTypes';

export const loginAction = (data) => ({
  type: ACTION.LOGIN_ACTION,
  data,
});