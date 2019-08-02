import axios from './interceptors';
import { loginURL, refreshTokenURL } from '../baseURL';
import { STORAGE_KEYS, BEARER } from '../../constants';
import { setTokensToLocalStorage } from '../../utils/localStorageUtil';

export const checkLogin = user => axios.post(loginURL, user).then(setTokensToLocalStorage);
export const refreshTokens = refreshToken => axios.post(refreshTokenURL, {refreshToken}).then(setTokensToLocalStorage).catch(e => Promise.reject(e));
export const deleteToken = refreshToken => axios.delete(refreshTokenURL, {data: {refreshToken}});
