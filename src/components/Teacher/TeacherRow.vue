<template>
    <tr class="teacher-row">
        <td>{{ index + 1 }}</td>
        <router-link class="teacher-name" :to="{ name: 'TeacherShow', params: { id: teacher.id } }">
            <td v-if="teacher.middle_name">{{ title + ' ' + teacher.middle_name }}</td>
            <td v-else> {{ title }} </td>
        </router-link>
        <td>{{ teacher.email }}</td>
        <td>{{ teacher.phone }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        teacher: Object,
        index: Number,
    },

    computed: {
        title() {
            return this.teacher.last_name + ' ' + this.teacher.first_name
        }
    }
}
</script>

<style>
td {
    border: solid 1px;

}

.teacher-name :hover {
    background-color: grey;
    cursor: pointer;
}
</style>