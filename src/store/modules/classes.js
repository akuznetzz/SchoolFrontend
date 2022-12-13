import ClassService from "@/services/ClassService.js"

const state = {
  classes: null
}

const getters = {
  allClasses(state) {
    return state.classes
  },
  classById: (state) => (id) => {
    return state.classes.find(item => item.id == id)
  }

}


const mutations = {
  setClasses(state, payload) {
    return state.classes = payload
  },
  addClass(state, payload) {
    return state.classes.push(payload)
  }
}
const actions = {
  async setClasses({ commit }) {
    let data
    await ClassService.getClass()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setClasses', data)
  }

}

export default {
  state, getters, mutations, actions

}
