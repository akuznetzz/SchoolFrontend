import SalaryService from "@/services/SalaryService.js"

const state = {
    salary: []
}

const getters = {
    salary(state) {
        return state.salary
    },

    salaryById: (state) => (id) => {
        return state.salary.find(item => item.id == id)
    },

    salaryByPaytypeTeacherMonth: (state) => (paytype, teacher, month) => {
        return state.salary.find(item => item.paytype == paytype && item.teacher == teacher && item.month == month)
    }

}


const mutations = {
    setSalary(state, payload) {
        return state.salary = payload
    },
    addSalary(state, payload) {
        return state.salary = [...state.salary, payload]
    }
}
const actions = {
    async setSalary({ commit }) {
        let data
        await SalaryService.getSalary()
            .then(resp => data = resp.data)
            .catch(err => console.log(err))

        commit('setSalary', data)
    }

}

export default {
    state, getters, mutations, actions

}
