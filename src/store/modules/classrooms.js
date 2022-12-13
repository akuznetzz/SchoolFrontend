import ClassroomService from "@/services/ClassroomService.js"

const state = {
  classrooms: null
}

const getters = {
  allClassrooms(state) {
    return state.classrooms
  },
  classroomById: (state) => (id) => {
    return state.classrooms.find(item => item.id == id)
  }

}


const mutations = {
  setClassrooms(state, payload) {
    return state.classrooms = payload
  },
  addClassroom(state, payload) {
    return state.classrooms.push(payload)
  }
}
const actions = {
  async setClassrooms({ commit }) {
    let data
    await ClassroomService.getClassroom()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setClassrooms', data)
  }

}

export default {
  state, getters, mutations, actions

}
