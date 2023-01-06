import Vue from 'vue'
import Vuex from 'vuex'
import subjects from './modules/subjects.js'
import teachers from './modules/teachers.js'
import timepairs from './modules/timepairs.js'
import classes from './modules/classes.js'
import classrooms from './modules/classrooms.js'
import schedule from './modules/schedule.js'
import timesheet from './modules/timesheet.js'





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
    teachers,
    timepairs,
    classes,
    classrooms,
    schedule,
    timesheet
  }
})
