import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/teachers/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTeachers(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setTeacher(o) {
        return apiClient.post('', o)
    },

    changeTeacher(id, o) {
        return apiClient.patch(`${id + '/'}`, o)
    },

    deleteTeacher(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}