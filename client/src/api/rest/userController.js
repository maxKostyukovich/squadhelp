import axios from './interceptors';
import { updateUserURL, userURL, allUsersURL } from '../baseURL';


export const getUser = () => axios.get(userURL);
export const getAllUsers = () => axios.get(allUsersURL);
export const updateBannedStatus = (id, isBanned) => axios.put(`${updateUserURL}/${id}`, {isBanned});