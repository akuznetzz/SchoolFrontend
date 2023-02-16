import TimesheetService from "@/services/TimesheetService.js"

const state = {
  timesheet: []
}

const getters = {
  allTimesheet(state) {
    return state.timesheet
  },
  timesheetById: (state) => (id) => {
    return state.timesheet.find(item => item.id == id)
  },
  timesheetByDate: (state) => (date) => {
    return state.timesheet.filter(item => item.date == date)
  },
  timesheetByDatePaytypeTeacher: (state) => (date, paytype, teacher) => {
    return state.timesheet.find(item => item.date === date && item.subject.pay_type === paytype && item.teacher.id === teacher)
  },
  timesheetByMonthPaytypeTeacher: (state) => (date, paytype, teacher) => {
    return state.timesheet.filter(item => item.date.includes(date) && item.subject.pay_type == paytype && item.teacher.id == teacher)
  },


}


const mutations = {
  setTimesheet(state, payload) {
    return state.timesheet = payload
  },
  addTimesheet(state, payload) {
    return state.timesheet = [...state.timesheet, payload]
  }
}
const actions = {
  async setTimesheet({ commit }) {
    let data
    await TimesheetService.getTimesheet()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setTimesheet', data)
  }

}

export default {
  state, getters, mutations, actions

}
