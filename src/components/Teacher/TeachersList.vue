<template>
    <div class="container">
        <div class="teachers__header">
            <div class="header__cell">№</div>
            <div class="header__cell">ФИО учителя</div>
            <div class="header__cell">Email</div>
            <div class="header__cell">Телефон</div>
        </div>
        <div class="teachers__body" :style="`grid-template-rows: repeat(${allTeachers.length}, auto)`">
            <TeachersRow v-for="teacher, index in allTeachers" :key="index" :teacher="teacher" :index="index" />
        </div>
    </div>
</template>

<script>
import TeachersRow from '@/components/Teacher/TeachersRow.vue';
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'allTeachers'
        ]),
    },

    components: {
        TeachersRow
    }

}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-rows: repeat(2, auto);
}

.teachers__header {
    display: grid;
    grid-template-columns: 20px 300px 120px 120px;
    justify-content: center;


}

.teachers__body {
    display: grid;
}

.header__cell {
    border-left: 1px solid #000;
    border-top: 1px solid #000;
}

.header__cell:last-child {
    border-right: 1px solid #000;
}
</style>