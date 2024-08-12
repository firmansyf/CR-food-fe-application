import { axios } from '@/lib/axios';

export function getProduct() {
    return axios({
        method: 'get',
        url: '/product'
    })
}

export function getProductById(id: number) {
    return axios({
        method: 'get',
        url: `/product/${id}`
    })
}