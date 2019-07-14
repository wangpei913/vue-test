import axios from 'axios';
// import store from '@/vuex/';
// import router from '@/router/';

// axios配置
axios.defaults.timeout = 6000;
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api'
} else {
    axios.defaults.baseURL = '/'
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     config.headers.Authorization = `token${store.state.token}`
        // }
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        // config.headers.token = localStorage.getItem('token');
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

// 返回拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        // if (err.response) {
        //     switch (err.response.status) {
        //         case 401:
        //             store.commit('logout');
        //             router.replace({
        //                 path: '/login',
        //                 query: {redirect: router.currentRoute.fullPath}
        //             })
        //             break;
        //         default:
        //             break;
        //     }
        // }
        // return Promise.reject(err.response.data)
        return Promise.reject(err);
    }
)

export default axios;