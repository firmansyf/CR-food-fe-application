import { axios } from '@/lib/axios';

export function me() {
    return axios({
        method: 'get',
        url: '/auth/me',
    })
}

export function login(params: any) {
    return axios({
        method: 'post',
        url: '/auth/signin',
        data: params
    })
}

export function logout() {
    return axios({
        method: 'post',
        url: '/auth/signout',
    })
}

export function ceckLogin() {
    return axios({
        method: 'get',
        url: '/auth',
    })
}

export function registration(params: any) {
    return axios({
        method: 'post',
        url: '/auth/signup',
        data: params
    })
}