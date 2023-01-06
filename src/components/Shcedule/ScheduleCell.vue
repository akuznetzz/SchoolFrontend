<template>
    <div>
        <span v-if="subject" class="subject"> {{ subject.name }} </span> <br>
        <span v-if="teacher">{{ teacher.last_name }},</span>
        <span v-if="classroom"> {{ classroom.name }} каб. </span>
    </div>


</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['day', 'group', 'timepair'],

    computed: {
        ...mapGetters([
            'getScheduleCell',
            'subjectById',
            'teacherById',
            'classroomById',
        ]),

        scheduleCell() {
            return this.getScheduleCell(this.day, this.group, this.timepair)
        },

        subject() {
            if (this.scheduleCell) {
                const { subject: sID } = this.scheduleCell
                return this.subjectById(sID)
            } else return null
        },

        teacher() {
            if (this.scheduleCell) {
                const { teacher: tID } = this.scheduleCell
                return this.teacherById(tID)
            } else return null
        },

        classroom() {
            if (this.scheduleCell) {
                const { classroom: cID } = this.scheduleCell
                return this.classroomById(cID)
            } else return null
        },


    },


}
</script>

<style scoped>

</style>