import ScheduleService from "@/services/ScheduleService.js"

const state = {
  schedule: [],
  scheduleLoaded: false,
}

const getters = {
  schedule(state) {
    return state.schedule
  },
  scheduleSlotById: (state) => (id) => {
    return state.schedule.find(item => item.id == id)
  },
  getScheduleSlotId: (state) => (obj) => {
    let item = state.schedule.find(item => item.dayOfWeek === obj.dayOfWeek &&
      item.timepair === obj.timepair &&
      item.group === obj.group)
    if (item) { return item.id }
  },
  timepairBusyTeachers: (state) => (timepair, dayOfWeek) => {
    const result = []
    state.schedule.forEach(item => {
      if (item.timepair === timepair && item.dayOfWeek === dayOfWeek) result.push(item.teacher)
    })
    return result
  },
  getDayScheduleByGroup: (state) => (day, group) => {
    return state.schedule.filter(item => item.dayOfWeek === day && item.group === group)
  },
  getScheduleCell: (state) => (day, group, timepair) => {
    return state.schedule.find(item => item.dayOfWeek === day && item.group === group && item.timepair === timepair)
  },
  getScheduleByDay: (state) => (day) => {
    return state.schedule.filter(item => item.dayOfWeek === day)
  }

}


const mutations = {
  setSchedule(state, payload) {
    state.scheduleLoaded = true
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
