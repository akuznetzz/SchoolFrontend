<template>
    <div>
        <PushClassroom @push-classroom="pushClassroom" />
        <ClassroomList :classrooms="classrooms" @remove="remove" />
    </div>
</template>

<script>
import ClassroomService from '@/services/ClassroomService.js';
import PushClassroom from '@/components/Classroom/PushClassroom.vue';
import ClassroomList from '@/components/Classroom/ClassroomList.vue';

export default {
    components: {
        PushClassroom,
        ClassroomList,
    },

    data() {
        return {
            classrooms: [],
        }
    },

    created() {
        ClassroomService.getClassroom()
            .then(resp => this.classrooms = resp.data)
            .catch(err => console.log(err))
    },

    methods: {
        async pushClassroom(obj) {

            await ClassroomService.setClassroom(obj)
            const i = document.getElementById('roomName')
            i.value = ''

            await ClassroomService.getClassroom()
                .then(resp => this.classrooms = resp.data)
                .catch(err => console.log(err))

        },

        async remove(id) {
            await ClassroomService.deleteClassroom(id)

            await ClassroomService.getClassroom()
                .then(resp => this.classrooms = resp.data)
                .catch(err => console.log(err))
        }
    }


}
</script>

<style lang="scss" scoped>

</style>