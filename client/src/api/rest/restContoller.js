import axios from 'axios';
import { loginURL } from '../baseURL';
import { STORAGE_KEYS, BEARER } from '../../constants';

export const checkLogin = user => axios.post(loginURL, user).then(setTokensToLocalStorage);


const setTokensToLocalStorage = (res) => {
  console.log('Set tokens!!!');
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE,`${BEARER}${res.data.tokenPair.accessToken}`);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE, res.data.tokenPair.refreshToken);
  return res;
};