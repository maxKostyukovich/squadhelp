import axios from './interceptors';
import { loginURL, refreshTokenURL } from '../baseURL';
import { STORAGE_KEYS, BEARER } from '../../constants';

export const checkLogin = user => axios.post(loginURL, user).then(setTokensToLocalStorage);
export const refreshTokens = refreshToken => axios.post(refreshTokenURL, {refreshToken}).then(setTokensToLocalStorage).catch(e => Promise.reject(e));
export const deleteToken = refreshToken => axios.delete(refreshTokenURL, {data: {refreshToken}});
const setTokensToLocalStorage = (res) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE,`${BEARER}${res.data.tokenPair.accessToken}`);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE, res.data.tokenPair.refreshToken);
  return res;
};