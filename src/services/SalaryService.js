import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/salary/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSalary(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setSalary(o) {
        return apiClient.post('', o)
    },

    deleteSalary(k) {
        return apiClient.delete(`${k + '/'}`)
    },

    editSalary(id, o) {
        return apiClient.patch(`${id + '/'}`, o)
    },
}