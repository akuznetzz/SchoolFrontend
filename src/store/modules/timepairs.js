import TimepairService from "@/services/TimepairService.js"

const state = {
  timepairs: null
}

const getters = {
  allTimepairs(state) {
    return state.timepairs
  },
  timepairById: (state) => (id) => {
    return state.timepairs.find(item => item.id == id)
  }

}


const mutations = {
  setTimepairs(state, payload) {
    return state.timepairs = payload
  },
  addTimepair(state, payload) {
    return state.timepairs.push(payload)
  }
}
const actions = {
  async setTimepairs({ commit }) {
    let data
    await TimepairService.getTimepair()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setTimepairs', data)
  }

}

export default {
  state, getters, mutations, actions

}
