<template>
  <div>
    <p>
      <router-link class="add-teacher-link" :to="{ name: 'AddTeacher' }">Добавить учителя</router-link>
    </p>
    <TeacherList :teachers="teachers" />
  </div>
</template>

<script>
import TeacherList from '@/components/Teacher/TeacherList.vue'
import { eventBus } from '../main'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
      teachers: 'allTeachers'
    })
  },

  components: {
    TeacherList
  },

  created() {

    eventBus.$off('remove-billing')
    eventBus.$off('add-billing')
    eventBus.$off('change-subject')


  }
}
</script>

<style scoped>
div p {
  text-align: left;
}
</style>
