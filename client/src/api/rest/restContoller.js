import axios from './interceptors';
import { loginURL, userURL, allUsersURL, refreshTokenURL } from '../baseURL';
import { STORAGE_KEYS, BEARER } from '../../constants';

export const checkLogin = user => axios.post(loginURL, user).then(setTokensToLocalStorage);
export const getUser = () => axios.get(userURL, {headers: {Authorization: localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE)}});
export const refreshTokens = data => axios.post(refreshTokenURL, data).then(setTokensToLocalStorage);
export const getAllUsers = () => axios.get(allUsersURL);

const setTokensToLocalStorage = (res) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE,`${BEARER}${res.data.tokenPair.accessToken}`);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE, res.data.tokenPair.refreshToken);
  return res;
};