<template>
  <div class="main-container" id="app">
    <nav>
      <router-link :to="{ name: 'Schedule' }">Расписание</router-link>
      <router-link :to="{ name: 'TeacherList' }">Учителя</router-link>
      <router-link :to="{ name: 'Journal' }">Журнал оценок</router-link>
      <router-link :to="{ name: 'Timesheet' }">Табель</router-link>
      <router-link :to="{ name: 'TeacherSalary' }">Расчёт ЗП</router-link>
      <router-link :to="{ name: 'AddPage' }">Добавление сущностей</router-link>

    </nav>
    <router-view class="view" />
  </div>
</template>

<script>
export default {

  beforeCreate() {
    this.$store.dispatch('setSubjects')
    this.$store.dispatch('setTeachers')
    this.$store.dispatch('setTimepairs')
    this.$store.dispatch('setClasses')
    this.$store.dispatch('setClassrooms')
    this.$store.dispatch('setSchedule')
    this.$store.dispatch('setTimesheet')


  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;

}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  margin: 1ch;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.view {
  margin-top: 50px;
}
</style>
