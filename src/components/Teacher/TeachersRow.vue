<template>
    <div class="teacher__row">
        <div class="teacher__index cell">{{ index + 1 }}</div>
        <router-link class="teacher__link cell" :to="{ name: 'TeacherCard', params: { id: teacher.id } }">
            <div class="teacher__name " v-if="teacher.middle_name">{{ title + ' ' + teacher.middle_name }}</div>
            <div class="teacher__name " v-else> {{ title }} </div>
        </router-link>
        <div class="teacher__email cell">{{ teacher.email }}</div>
        <div class="teacher__phone cell">{{ teacher.phone }}</div>
    </div>
</template>

<script>
export default {
    props: ['teacher', 'index'],
    computed: {
        title() {
            return this.teacher.last_name + ' ' + this.teacher.first_name
        }
    }
}
</script>

<style>
.teacher__row {
    display: grid;
    grid-template-columns: 20px 300px 120px 120px;
    text-align: left;
}

.teacher__row:last-child {
    border-bottom: 1px solid #000;
}

.teacher__link:hover {
    background-color: grey;
    cursor: pointer;
}

.teacher__index {
    text-align: center;
}

.cell {
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    padding: 0 2px;
}

.cell:last-child {
    border-right: 1px solid #000;
}
</style>