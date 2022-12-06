import Vue from 'vue'
import Vuex from 'vuex'
import subjects from './modules/subjects.js'
import teachers from './modules/teachers.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    subjects,
    teachers
  }
})
