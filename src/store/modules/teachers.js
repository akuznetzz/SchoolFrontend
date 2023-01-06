import TeacherService from "@/services/TeacherService.js"

const state = {
  teachers: []
}

const getters = {
  allTeachers(state) {
    return state.teachers
  },
  teacherById: (state) => (id) => {
    return state.teachers.find(item => item.id == id)
  }

}


const mutations = {
  setTeachers(state, payload) {
    return state.teachers = payload
  },
  addTeacher(state, payload) {
    return state.teachers.push(payload)
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
