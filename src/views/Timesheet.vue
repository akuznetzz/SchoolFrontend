<template>
    <div>
        Табель <br>
        {{ dateString }}
        <div v-if="scheduleLoaded" class="wrapper">
            <div class="group" v-for="group in allClasses">
                <div class="group__name"> {{ group.name }} </div>
                <div class="group__timepairs">
                    <div class="timepair" v-for="timepair in allTimepairs"> {{ timepair.name }} урок
                        <TimesheetRow :day="day" :group="group.id" :timepair="timepair.id" :submited="submited"
                            :date="date" />

                    </div>
                </div>
            </div>
        </div>
        <button @click="timesheetSubmit">Заполнить табель</button>

    </div>


</template>

<script>
import { mapGetters } from 'vuex'
import TimesheetRow from '@/components/Timesheet/TimesheetRow.vue';

export default {
    components: {
        TimesheetRow
    },

    data() {
        return {
            daysOfWeek: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
            month: null,
            day: null,
            submited: false,
            date: null

        }
    },

    computed: {
        ...mapGetters([
            'allTimepairs',
            'allClasses',
            'schedule'

        ]),

        scheduleLoaded() {
            return this.$store.state.schedule.scheduleLoaded
        },


        dateString() {
            let now = new Date()
            this.day = this.daysOfWeek[now.getDay() - 1]
            this.month = this.months[now.getMonth()]
            this.date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()

            return now.getDate() + ' ' + this.month + ' ' + now.getFullYear() + ',' + ' ' + this.day
        },

    },

    methods: {
        timesheetSubmit(event) {
            this.submited = true
            event.target.disabled = true

        }
    }

}
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
}

.group {
    display: grid;
    grid-template-columns: 50px 1fr;
}

/* .group__name {
    grid-template-rows: span 4;
} */

.group__timepairs {
    display: grid;
}

.timepair {
    display: grid;
    grid-template-columns: 60px 1fr;
}
</style>