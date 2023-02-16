
const state = {
    paytypeSalary: []
}

const getters = {
    paytypeSalary(state) {
        return state.paytypeSalary
    },

    paytypeSalaryByPaytypeTeacherMonth: (state) => (paytype, teacher, month) => {
        return state.paytypeSalary.find(item => item.paytype == paytype && item.teacher == teacher && item.month == month)
    },

    paytypeSalaryByTeacherMonth: (state) => (teacher, month) => {
        return state.paytypeSalary.filter(item => item.teacher == teacher && item.month == month)
    }

}


const mutations = {

    addPaytypeSalary(state, payload) {
        return state.paytypeSalary = [...state.paytypeSalary, payload]
    },
    deletePaytypeSalary(state, payload) {
        const index = state.paytypeSalary.findIndex(item => item.teacher === payload.teacher
            && item.paytype === payload.paytype
            && item.month === payload.month)
        return state.paytypeSalary.splice(index, 1)
    }
}
const actions = {


}

export default {
    state, getters, mutations, actions

}
