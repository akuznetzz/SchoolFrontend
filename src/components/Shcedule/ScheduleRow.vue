<template>
    <div @change.prevent="changeSlot">
        <select v-if="!scheduleSlot.subject" v-model="scheduleSlot.teacher">
            <option selected disabled>---</option>
            <option v-for="teacher in allTeachers" :value="teacher.id">{{ teacher.last_name }}</option>
        </select>
        <select v-else v-model="scheduleSlot.teacher">
            <option selected disabled>---</option>
            <option v-for="teacher in subject.has_subject" :value="teacher.id">{{ teacher.last_name }}
            </option>
        </select>

        <select v-if="!scheduleSlot.teacher" v-model="scheduleSlot.subject">
            <option selected disabled>---</option>
            <option v-for="subject in allSubjects" :value="subject.id">{{ subject.name }}</option>
        </select>
        <select v-else v-model="scheduleSlot.subject">
            <option selected disabled>---</option>
            <option v-for="subject in teacherSubjects" :value="subject.id">{{ subject.name }}</option>
        </select>


        <select v-model="scheduleSlot.classroom">
            <option selected disabled>---</option>
            <option v-for="classroom in allClassrooms" :value="classroom.id"> {{ classroom.name }}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { eventBus } from '../../main.js'


export default {
    props: ['day', 'group', 'timepair'],

    data() {
        return {
            // teacher: null,
            // subject: null,

            scheduleSlot: {
                timepair: this.timepair,
                group: this.group,
                dayOfWeek: null,
                teacher: null,
                subject: null,
                classroom: null,
                id: null,
            }
        }
    },

    watch: {
        day(val, oldVal) {
            // if (val !== oldVal) { console.log(val) }
            this.scheduleSlot.dayOfWeek = val
            let id = this.getScheduleSlotId(this.scheduleSlot)
            if (id) {
                this.scheduleSlot = this.scheduleSlotById(id)
            }
        }
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allSubjects',
            'allClassrooms',
            'getScheduleSlotId',
            'scheduleSlotById'
        ]),

        teacherSubjects() {
            return this.teacher.subject.map(item =>
                this.allSubjects.find(e => e.id == item)
            )
        }
    },

    updated() {
        // console.log(this.day)
    },

    methods: {
        changeSlot() {
            if (this.day === null) { alert('Выберите день недели'); return }
            else { }

            if (!this.scheduleSlot.id) {
                if (this.getScheduleSlotId(this.scheduleSlot)) {
                    this.scheduleSlot.id = this.getScheduleSlotId(this.scheduleSlot)
                }
            }

            if (this.teacher !== null) { this.scheduleSlot.teacher = this.teacher.id }
            if (this.subject !== null) { this.scheduleSlot.subject = this.subject.id }

            eventBus.$emit('change-slot', this.scheduleSlot)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>