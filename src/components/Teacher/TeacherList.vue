<template>
  <div class="teachers-list">
    <table>
      <tr>
        <th>№</th>
        <th>ФИО учителя</th>
        <th>Email</th>
        <th>Телефон</th>
      </tr>
      <TeacherRow v-for="(teacher, index) in teachers" :key="teacher.id" :teacher="teacher" :index="index" />
    </table>
  </div>
</template>

<script>
import TeacherRow from '@/components/Teacher/TeacherRow.vue'

export default {
  props: ['teachers'],

  components: {
    TeacherRow
  },


}
</script>
