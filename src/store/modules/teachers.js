import TeacherService from "@/services/TeacherService.js"

const state = {
  teachers: [],
  teachersLoaded: false,
}

const getters = {
  allTeachers(state) {
    return state.teachers
  },
  teacherById: (state) => (id) => {
    return state.teachers.find(item => item.id == id)
  },

}


const mutations = {
  setTeachers(state, payload) {
    state.teachersLoaded = true
    return state.teachers = payload
  },
  addTeacher(state, payload) {
    return state.teachers.push(payload)
  },
  editTeacher(state, payload) {
    const index = state.teachers.findIndex(item => item.id === payload.id)
    state.teachers[index] = { ...payload }
  }
}


const actions = {
  async setTeachers({ commit }) {
    let data
    await TeacherService.getTeachers()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setTeachers', data)
  }

}

export default {
  state, getters, mutations, actions

}
