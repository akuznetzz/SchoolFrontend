import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/paytypes/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPaytype(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setPaytype(o) {
        return apiClient.post('', o)
    },

    deletePaytype(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}