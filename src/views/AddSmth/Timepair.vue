<template>
    <div>
        <!-- <PushClassroom @push-classroom="pushClassroom" /> -->
        <TimepairList @remove="remove" />
    </div>
</template>

<script>
// import PushClassroom from '@/components/Classroom/PushClassroom.vue';
import TimepairList from '@/components/Timepair/TimepairList.vue';

export default {
    components: {
        TimepairList,
    },

    // data() {
    //     return {
    //         classrooms: [],
    //     }
    // },

    // created() {
    //     ClassroomService.getClassroom()
    //         .then(resp => this.classrooms = resp.data)
    //         .catch(err => console.log(err))
    // },

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