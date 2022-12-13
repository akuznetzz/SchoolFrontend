import ScheduleService from "@/services/ScheduleService.js"

const state = {
  schedule: null,
}

const getters = {
  schedule(state) {
    return state.schedule
  },
  scheduleSlotById: (state) => (id) => {
    return state.schedule.find(item => item.id == id)
  },
  getScheduleSlotId: (state) => (obj) => {
    let item = state.schedule.find(item => item.dayOfWeek == obj.dayOfWeek &&
      item.timepair == obj.timepair &&
      item.group == obj.group)
    if (item) { return item.id }
  }

}


const mutations = {
  setSchedule(state, payload) {
    return state.schedule = payload
  },
  addScheduleSlot(state, payload) {
    return state.schedule.push(payload)
  },
  updateScheduleSlot(state, payload) {
    let index = state.schedule.findIndex(item => item.id == payload.id)
    return state.schedule[index] = payload
  }

}


const actions = {
  async setSchedule({ commit }) {
    let data
    await ScheduleService.getSchedule()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setSchedule', data)
  }

}

export default {
  state, getters, mutations, actions

}
