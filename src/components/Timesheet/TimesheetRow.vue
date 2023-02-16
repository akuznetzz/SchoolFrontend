<template>
    <div class="row__wrapper">

        <select v-model="teacher">
            <option selected>---</option>
            <option v-for="teacher in allTeachers" :value="teacher.id">{{ teacher.last_name }}</option>
        </select>

        <select v-model="subject">
            <option selected>---</option>
            <option v-for="subject in allSubjects" :value="subject.id">{{ subject.name }}</option>
        </select>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import TimesheetService from '@/services/TimesheetService.js';

export default {
    props: ['day', 'group', 'timepair', 'submited', 'date'],

    data() {
        return {

            teacher: this.$store.getters.getScheduleCell(this.day, this.group, this.timepair)?.teacher,
            subject: this.$store.getters.getScheduleCell(this.day, this.group, this.timepair)?.subject,
        }
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allSubjects',
            'getScheduleCell'
        ]),

    },

    watch: {
        date() {
            this.teacher = this.getScheduleCell(this.day, this.group, this.timepair)?.teacher
            this.subject = this.getScheduleCell(this.day, this.group, this.timepair)?.subject
        },

        submited() {
            if (this.teacher && this.subject) {
                const timesheet = {
                    teacher: this.teacher,
                    subject: this.subject,
                    hoursAmount: 1,
                    date: this.date
                }
                TimesheetService.setTimesheet(timesheet)
                    .then(resp => {
                        this.$store.dispatch('setTimesheet')
                    })
                    .catch(err => console.log(err))
            }
        }
    }


}
</script>

<style  scoped>
.row__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>