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
        const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE);
        const {config, response: {data, status}} = err;
        if(!refreshToken){
            console.log("No tokens");
            return Promise.reject(err);
        }
        if(['Token expired', 'Invalid token'].includes(data)){
            refreshTokens(refreshToken);
            return axios.request(config);
        }
        if("Refresh token expired" === data){
            removeTokens();
            history.push('/login');
            return Promise.reject(err);
        }
        if(status == "401") {
            removeTokens();
            return Promise.reject(err);
        }
    }
);

function removeTokens(){
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
}
export default axios;