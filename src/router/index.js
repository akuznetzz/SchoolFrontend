import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTeachers from '../views/AllTeachers.vue'
import TeacherShow from '../views/TeacherShow.vue'
import Schedule from '@/views/Schedule.vue';
import Journal from '@/views/Journal.vue';
import TeacherAttendance from '@/views/TeacherAttendance.vue';
import TeacherSalary from '@/views/TeacherSalary.vue';
import AddPage from '@/views/AddSmth/AddPage.vue';
import AddTeacher from '@/views/AddSmth/AddTeacher.vue';
import AddSchedule from '@/views/AddSmth/AddSchedule.vue';
import AddClassroom from '@/views/AddSmth/AddClassroom.vue';
import AddSubject from '@/views/AddSmth/AddSubject.vue';
import AddClass from '@/views/AddSmth/AddClass.vue';
import Timepair from '@/views/AddSmth/Timepair.vue';





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/teacher/salary',
    name: 'TeacherSalary',
    component: TeacherSalary
  },
  {
    path: '/teacher/attendance',
    name: 'TeacherAttendance',
    component: TeacherAttendance
  },
  {
    path: '/teachers',
    name: 'TeacherList',
    component: AllTeachers
  },
  {
    path: '/teacher/:id',
    name: 'TeacherShow',
    component: TeacherShow,
    props: true,
  },
  {
    path: '/addpage',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/add-page/add-teacher',
    name: 'AddTeacher',
    component: AddTeacher
  },
  {
    path: '/add-page/add-schedule',
    name: 'AddSchedule',
    component: AddSchedule
  },
  {
    path: '/add-page/add-classroom',
    name: 'AddClassroom',
    component: AddClassroom
  },
  {
    path: '/add-page/add-subject',
    name: 'AddSubject',
    component: AddSubject
  },
  {
    path: '/add-page/add-class',
    name: 'AddClass',
    component: AddClass
  },
  {
    path: '/add-page/timepair',
    name: 'Timepair',
    component: Timepair
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
