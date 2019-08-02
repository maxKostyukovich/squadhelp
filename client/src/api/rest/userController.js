import axios from './interceptors';
import { updateUserURL, userURL, allUsersURL } from '../baseURL';
import { setTokensToLocalStorage } from '../../utils/localStorageUtil';

export const getUser = () => axios.get(userURL);
export const getAllUsers = () => axios.get(allUsersURL);
export const updateBannedStatus = (id, isBanned) => axios.put(`${updateUserURL}/${id}`, {isBanned});
export const createUser = (user) => axios.post(userURL, user).then(setTokensToLocalStorage);