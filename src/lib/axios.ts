import ax from 'axios'

export const axios = ax.create({
    baseURL: `http://localhost:8000/api/v1`,
    withCredentials : true,
})

export default axios;