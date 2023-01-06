<template>
    <div>
        <select name="day-of-week" v-model="dayOfWeek">
            <option selected disabled>---</option>
            <option v-for="day in daysOfWeek" :value="day"> {{ day }}</option>
        </select>
        <label for="day-of-week"> День недели</label>
        <div v-for="group in allClasses"> {{ group.name }}
            <div v-for="timepair in allTimepairs">
                {{ timepair.name + 'урок' }}
                <ScheduleRow class="schedule-row" :day="dayOfWeek" :group="group.id" :timepair="timepair.id" />

            </div>
        </div>
    </div>
</template>

<script>
import ScheduleService from '@/services/ScheduleService.js';
import ScheduleRow from '@/components/Shcedule/ScheduleRow.vue';
import { eventBus } from '../main';
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            daysOfWeek: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            dayOfWeek: null,

        }
    },

    components: {
        ScheduleRow
    },

    computed: {
        ...mapGetters([
            'allClasses',
            'allTimepairs',
            'schedule'
        ])
    },

    created() {

        eventBus.$on('change-slot', data => {
            if (!data.id) {
                ScheduleService.setSchedule(data)
                    .then(resp => this.addScheduleSlot(resp.data))
                    .catch(err => console.log(err))
            } else {
                // this.updateScheduleSlot(data)
                ScheduleService.editSchedule(data.id, data)
                    .then(resp => this.updateScheduleSlot(resp.data))
                    .catch(err => console.log(err))
            }
        })
    },

    methods: {
        // test() {
        //     console.log(1)
        // },

        ...mapMutations([
            'addScheduleSlot',
            'updateScheduleSlot'
        ])


    }

}
</script>

<style scoped>
.schedule-row {
    display: inline
}
</style>

<!--  -->