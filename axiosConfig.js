// 在 axiosConfig.js 文件中
import axios from 'axios';

const key ="你的高德API密钥"

const api = axios.create({
    baseURL: 'https://restapi.amap.com/v3'//高德api入口
});

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params.key = key;  // 替换为你的API密钥
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(response => {
    if (response.data.status === '1') {
        return response.data;  // 返回数据部分
    } else {
        return Promise.reject(response.data.info || 'API错误');
    }
}, error => {
    return Promise.reject(error);
});

export default api;