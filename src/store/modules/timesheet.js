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
  }

}


const mutations = {
  setTimesheet(state, payload) {
    return state.timesheet = payload
  },
  addTimesheet(state, payload) {
    return state.timesheet.push(payload)
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
