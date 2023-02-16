<template>
    <div>
        <router-link class="add-teacher-link" :to="{ name: 'TeacherCardBlank' }">Добавить учителя</router-link>

        <TeachersList />
    </div>
</template>

<script>
import TeachersList from '@/components/Teacher/TeachersList.vue';

export default {
    components: {
        TeachersList
    }

}
</script>

<style lang="scss" scoped>

</style>