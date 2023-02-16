<template>
    <div>

        <router-link :to="{ name: 'MonthTimesheet' }">Табель на месяц</router-link>

        <BaseDate @getDate="getDate" />


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
            month: this.$store.state.date.month,
            day: this.$store.state.date.dayOfWeek,
            submited: false,
            date: this.$store.state.date.today

        }
    },

    computed: {
        ...mapGetters([
            'allTimepairs',
            'allClasses',
            'schedule',
            'dayOfWeekByNumber',
            'dayOfMonth',
            'dayOfWeek',
            'today',
            'getMonth'

        ]),

        scheduleLoaded() {
            return this.$store.state.schedule.scheduleLoaded
        },

    },

    methods: {
        timesheetSubmit(event) {
            this.submited = true
            event.target.disabled = true

        },

        getDate(data) {
            this.date = data
            const date = new Date(data)
            this.day = this.dayOfWeekByNumber(date.getDay())
        }
    },

    watch: {
        dayOfMonth() {
            this.month = this.getMonth
            this.day = this.dayOfWeek
            this.date = this.today
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