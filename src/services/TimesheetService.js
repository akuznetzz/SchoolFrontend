import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/timesheet/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTimesheet(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setTimesheet(o) {
        return apiClient.post('', o)
    },

    deleteTimesheet(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}