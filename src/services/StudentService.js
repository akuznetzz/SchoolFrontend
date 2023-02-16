import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/students/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudents(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setStudent(o) {
        return apiClient.post('', o)
    },

    editStudent(id, o) {
        return apiClient.patch(`${id + '/'}`, o)
    },

    deleteStudent(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}