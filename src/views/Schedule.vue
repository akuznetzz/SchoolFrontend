<template>
    <div>
        <div>
            <router-link :to="{ name: 'EditSchedule' }">Редактировать расписание</router-link>
        </div>

        <div v-if="allTimepairs.length && allClasses.length" class="wrapper">
            <div class="schedule-header"
                :style="`grid-template-columns: 121px 61px repeat(${allClasses.length}, minmax(115px, 1fr))`">
                <div>День недели</div>
                <div>Урок</div>
                <div v-for="group in allClasses"> {{ group.name }}</div>
            </div>
            <div class="day" v-for="day in daysOfWeek">
                <div class="day__name" :style="`grid-row-start: span ` + allTimepairs.length">
                    <div class="name"> {{ day }} </div>
                </div>
                <div class="timepair" v-for="timepair in allTimepairs"
                    :style="`grid-template-columns: 60px repeat(${allClasses.length}, minmax(115px, 1fr))`">

                    <span class="timepair__name">{{ timepair.name }} урок </span>
                    <div class="lesson" v-for="group in allClasses">
                        <ScheduleCell :day="day" :group="group.id" :timepair="timepair.id" />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

import ScheduleCell from '@/components/Shcedule/ScheduleCell.vue';
import { mapGetters } from 'vuex';

export default {


    components: {
        ScheduleCell,
    },

    data() {
        return {
            daysOfWeek: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        }
    },
    computed: {
        ...mapGetters([
            'allClasses',
            'allTimepairs'
        ])
    },

}
</script>

<style scoped>
.schedule-header {
    display: grid;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}

.schedule-header div {
    border-right: 1px solid #000;
    padding: 5px;

}

.schedule-header div:last-child {
    border-right: none;

}

.day {
    display: grid;
    grid-template-columns: 120px 1fr;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;

}



.day__name {
    justify-self: start;
    padding: 0 5px;
}

.name {}

.day:last-child {
    border-bottom: 1px solid #000;
}

.timepair {
    display: grid;
    grid-auto-flow: column;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    grid-template-rows: minmax(40px, 1fr);


}

.timepair__name {
    padding: 0 5px;
    justify-self: start;
}

.timepair:last-child {
    border-bottom: none;
}

.lesson {
    border-left: 1px solid #000;
    padding: 0 5px;


}
</style>

