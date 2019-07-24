import axios from 'axios';
import { loginURL } from '../baseURL';


export const checkLogin = user => axios.post(loginURL, user);
