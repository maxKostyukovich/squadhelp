import axios from 'axios';
import {refreshTokens} from './restContoller'
import history from '../../history';
import {STORAGE_KEYS} from "../../constants";

axios.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
    if (!config.headers.Authorization && accessToken) {
        config.headers.Authorization = accessToken
    }
    return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        console.log(err);
        const {config, response: {data, status}} = err;
        console.log("axios response interceptor error status: ", data ,status);
        if(status == "401" && !['Token expired', 'Invalid token'].includes(data)){
            history.push("/login");
            return Promise.reject(err);
        }

        refreshTokens(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE));
        removeTokens();

        return axios.request(config);
    }
);

function removeTokens(){
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
}
export default axios;