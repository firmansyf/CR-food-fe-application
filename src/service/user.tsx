import { axios } from '@/lib/axios';

export function updateProfile(params: any) {
    return axios({
        method: 'put',
        url: '/auth/update-me',
        data: params
    })
}