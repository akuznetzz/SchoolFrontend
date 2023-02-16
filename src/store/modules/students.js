import StudentService from "@/services/StudentService.js"

const state = {
  students: []
}

const getters = {
  allStudents(state) {
    return state.students
  },
  studentById: (state) => (id) => {
    return state.students.find(item => item.id == id)
  },
  studentsByGroupId: (state) => (group) => {
    return state.students.filter(item => item.group == group)
  }

}


const mutations = {
  setStudents(state, payload) {
    return state.students = payload
  },
  addStudent(state, payload) {
    return state.students.push(payload)
  }
}


const actions = {
  async setStudents({ commit }) {
    let data
    await StudentService.getStudents()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setStudents', data)
  }

}

export default {
  state, getters, mutations, actions

}
