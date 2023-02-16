import Vue from 'vue'
import VueRouter from 'vue-router'
// import TeacherShow from '../views/TeacherShow.vue'
import Schedule from '@/views/Schedule.vue';
import Journal from '@/views/Journal.vue';
import Timesheet from '@/views/Timesheet.vue';
import Salary from '@/views/Salary.vue';
import AddPage from '@/views/AddSmth/AddPage.vue';
import AddClassroom from '@/views/AddSmth/AddClassroom.vue';
import AddSubject from '@/views/AddSmth/AddSubject.vue';
import AddClass from '@/views/AddSmth/AddClass.vue';
import Timepair from '@/views/AddSmth/Timepair.vue';
import EditSchedule from '@/views/EditSchedule.vue';
import MonthTimesheet from '@/views/MonthTimesheet.vue';
import ShowJournal from '@/views/ShowJournal.vue';
import ListsIndex from '@/views/Lists/ListsIndex.vue';
import Teachers from '@/views/Lists/Teachers.vue';
import StudentsList from '@/views/Lists/StudentsList.vue';
import SubjectsList from '@/views/Lists/SubjectsList.vue';
import GroupsList from '@/views/Lists/GroupsList.vue';
import ClassroomsList from '@/views/Lists/ClassroomsList.vue';
import Timepairs from '@/views/Lists/Timepairs.vue';
import TeacherCard from '@/components/Teacher/TeacherCard.vue'
import Paytypes from '@/views/Lists/Paytypes.vue'







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/edit-schedule',
    name: 'EditSchedule',
    component: EditSchedule
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/salary',
    name: 'Salary',
    component: Salary
  },
  {
    path: '/timesheet',
    name: 'Timesheet',
    component: Timesheet
  },
  {
    path: '/timesheet/month',
    name: 'MonthTimesheet',
    component: MonthTimesheet
  },
  {
    path: '/teacher',
    name: 'TeacherCardBlank',
    component: TeacherCard,

  },
  {
    path: '/teacher/:id',
    name: 'TeacherCard',
    component: TeacherCard,
    props: true,
  },
  {
    path: '/addpage',
    name: 'AddPage',
    component: AddPage
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
  {
    path: '/show-journal',
    name: 'ShowJournal',
    component: ShowJournal
  },
  {
    path: '/lists',
    name: 'ListsIndex',
    component: ListsIndex
  },
  {
    path: '/lists/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/lists/students',
    name: 'StudentsList',
    component: StudentsList
  },
  {
    path: '/lists/subjects',
    name: 'SubjectsList',
    component: SubjectsList
  },
  {
    path: '/lists/groups',
    name: 'GroupsList',
    component: GroupsList
  },
  {
    path: '/lists/classrooms',
    name: 'ClassroomsList',
    component: ClassroomsList
  },
  {
    path: '/lists/timepairs',
    name: 'Timepairs',
    component: Timepairs
  },
  {
    path: '/lists/paytypes',
    name: 'Paytypes',
    component: Paytypes
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
