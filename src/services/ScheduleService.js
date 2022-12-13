import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/schedule/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSchedule(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setSchedule(o) {
        return apiClient.post('', o)
    },

    editSchedule(id, o) {
        return apiClient.patch(`${id + '/'}`, o)
    },

    deleteSchedule(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}