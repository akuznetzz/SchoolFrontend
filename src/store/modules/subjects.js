import SubjectService from "@/services/SubjectService.js"

const state = {
  subjects: [],
  subjectsLoaded: false
}

const getters = {
  allSubjects(state) {
    return state.subjects
  },
  subjectById: (state) => (id) => {
    return state.subjects.find(item => item.id == id)
  }

}


const mutations = {
  setSubjects(state, payload) {
    state.subjectsLoaded = true
    return state.subjects = payload
  },
  addSubject(state, payload) {
    return state.subjects.push(payload)
  }
}
const actions = {
  async setSubjects({ commit }) {
    let data
    await SubjectService.getSubject()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setSubjects', data)
  }

}

export default {
  state, getters, mutations, actions

}
