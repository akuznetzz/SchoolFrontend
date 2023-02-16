import Vue from 'vue'
import Vuex from 'vuex'
import subjects from './modules/subjects.js'
import teachers from './modules/teachers.js'
import timepairs from './modules/timepairs.js'
import classes from './modules/classes.js'
import classrooms from './modules/classrooms.js'
import schedule from './modules/schedule.js'
import timesheet from './modules/timesheet.js'
import paytype from './modules/paytype.js'
import billing from './modules/billing.js'
import salary from './modules/salary.js'
import paytypeSalary from './modules/paytypeSalary.js'
import date from './modules/date.js'
import students from './modules/students.js'
import journal from './modules/journal.js'
import journalTableParams from './modules/journalTableParams.js'
import coloredMarks from './modules/coloredMarks.js'


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
    timesheet,
    paytype,
    billing,
    salary,
    paytypeSalary,
    date,
    students,
    journal,
    journalTableParams,
    coloredMarks
  }
})
