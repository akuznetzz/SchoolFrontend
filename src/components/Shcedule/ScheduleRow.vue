<template>
    <div @change.prevent="changeSlot">
        <select v-model="scheduleSlot.teacher">
            <option selected disabled>---</option>
            <option v-for="teacher in allTeachers" :value="teacher.id">{{ teacher.last_name }}</option>
        </select>

        <select v-model="scheduleSlot.subject">
            <option selected disabled>---</option>
            <option v-for="subject in allSubjects" :value="subject.id">{{ subject.name }}</option>
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
            this.scheduleSlot.dayOfWeek = val



            let id = this.getScheduleSlotId(this.scheduleSlot)

            if (id) {
                Object.assign(this.scheduleSlot, this.scheduleSlotById(id))
            } else {
                this.scheduleSlot.teacher = null
                this.scheduleSlot.subject = null
                this.scheduleSlot.classroom = null
                this.scheduleSlot.id = null
            }
        }
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allSubjects',
            'allClassrooms',
            'getScheduleSlotId',
            'scheduleSlotById',
            'timepairBusyTeachers'
        ]),

        // отображать в селекторе только доступных учителей. Но ещё не работает и возникает вопрос как правильно встроить эту логику
        // availableTeachers() {
        //     const availableTeachers = [...this.allTeachers]
        //     const indexes = []
        //     const busyTeachers = this.timepairBusyTeachers(this.timepair, this.day)

        //     busyTeachers.forEach(item => {
        //         indexes.push(this.allTeachers.findIndex(elem => elem.id == item))
        //     })
        //     console.log(indexes)

        //     indexes.forEach(item => availableTeachers.splice(item, 1))

        //     return availableTeachers
        // }

    },



    methods: {
        changeSlot() {
            if (this.day === null) { alert('Выберите день недели'); return }

            if (!this.scheduleSlot.id) {
                if (this.getScheduleSlotId(this.scheduleSlot)) {
                    this.scheduleSlot.id = this.getScheduleSlotId(this.scheduleSlot)
                }
            }

            eventBus.$emit('change-slot', this.scheduleSlot)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>