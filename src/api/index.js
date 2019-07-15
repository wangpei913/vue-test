import axios from '@/utils/ajax'

// 注册
export function registerUser (params) {
    return axios.post('/register', {
        ...params
    });
}
// 登录
export function loginUser (params) {
    return axios.post('/login', {
        ...params
    });
}
// 用户菜单
export function userMenu (params) {
    return axios.post('/menu', {
        ...params
    });
}