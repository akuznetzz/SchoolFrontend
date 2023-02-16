import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/rfw/school/journal/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getJournalSlot(n) {
        if (n) {
            return apiClient.get(`${n + '/'}`)
        } else {
            return apiClient.get()
        }
    },

    setJournalSlot(o) {
        return apiClient.post('', o)
    },

    editJournalSlot(id, o) {
        return apiClient.patch(`${id + '/'}`, o)
    },

    deleteJournalSlot(k) {
        return apiClient.delete(`${k + '/'}`)
    },
}