<template>
    <div>
        <div class="month_choice">
            Табель на месяц
            <base-month-input v-model="month" />
            <!-- <button @click="test">консоль</button> -->
        </div>
        <div class="wrapper">
            <div class="header" :class="{ one__paytype: allPaytypes.length === 1 }">
                <div class="left_part">
                    <div class="header__name"> ФИО </div>
                </div>

                <div class="header__summary"
                    :style="`grid-template-columns: repeat(${allPaytypes.length}, minmax(20px, 1fr))`">
                    <div class="summary__name" :style="`grid-column: 1 / ${allPaytypes.length + 1}`">Итого</div>
                    <div class="header__paytypes" v-for="paytype in allPaytypes"> {{ paytype.name[0] }}</div>

                </div>

                <div class="right_part"
                    :style="`grid-template-columns: repeat(${daysAmount}, minmax(${allPaytypes.length * 20}px, 1fr))`">
                    <div class="header__days" v-for="day in daysAmount"
                        :style="`grid-template-columns: repeat(${allPaytypes.length}, minmax(20px, 1fr))`">
                        <div class="header__day" :style="`grid-column: 1 / ${allPaytypes.length + 1}`"> {{ day }} </div>
                        <div class="header__paytypes" v-for="paytype in allPaytypes"> {{ paytype.name[0] }}</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="teachers" v-for="teacher in allTeachers" :key="teacher.id"
                    :style="`grid-template-columns: 109px minmax(50px, ${allPaytypes.length * 20}px) 1fr;`">
                    <div class="teacher_name">
                        {{ teacher.last_name }}
                    </div>
                    <div class="summary__container"
                        :style="`grid-template-columns: repeat(${allPaytypes.length}, minmax(20px, 1fr))`">
                        <div class="summary__count" v-for="paytype in allPaytypes">
                            <TimesheetSummary :teacher="teacher.id" :month="month" :paytype="paytype.id" />
                        </div>
                    </div>
                    <div class="month" v-if="month"
                        :style="`grid-template-columns: repeat(${daysAmount}, minmax(40px, 1fr))`">
                        <div class="days" v-for="day in daysAmount"
                            :style="`grid-template-columns: repeat(${allPaytypes.length}, 1fr)`">
                            <div class="hours" v-for="paytype in allPaytypes" :key="paytype.id">
                                <TimesheetHours :teacher="teacher.id" :day="day" :month="month" :paytype="paytype.id" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



</template>

<script>
import { mapGetters } from 'vuex';
import TimesheetHours from '@/components/Timesheet/TimesheetHours.vue';
import TimesheetSummary from '@/components/Timesheet/TimesheetSummary.vue';


export default {
    components: {
        TimesheetHours,
        TimesheetSummary
    },

    data() {
        return {
            month: '2023-01',


        }
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allPaytypes'
        ]),

        daysAmount() {
            let date = new Date(+this.month.slice(0, 4), +this.month.slice(-2), 0)
            return date.getDate()
        },
    },


}
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 108px 1fr 1fr;
}

.one__paytype {
    grid-template-columns: 108px 50px 1fr;
}

.right_part {
    display: grid;
}

.header__summary {
    display: grid;
    grid-template-rows: 1fr 1fr;
}



.header__days {
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.header__day {
    border: 1px solid #000;
}

.header__paytypes {
    font-size: 10px;
    border: 1px solid #000;
}

.left_part {
    border: 1px solid #000;
}

.summary__name {
    border: 1px solid #000;
    display: grid;
}

.summary__container {
    display: grid;
    grid-template-rows: 1fr;
}

.summary__count {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
}

.summary__count:last-child {
    border-right: 2px solid #000;

}

.month_choice {
    text-align: left;
}

.wrapper {
    display: grid;
    grid-template-rows: 50px 1fr;
}

.teachers {
    display: grid;
    grid-template-columns: 110px 1fr 1fr;
}

.teacher_name {
    border: 1px solid #000;
    border-top: none;
    border-right: 2px solid #000;
}

.month {
    display: grid;
    border-bottom: 1px solid #000;

}

.days {
    display: grid;
    grid-template-rows: 1fr;
    border-right: 2px solid #000;
}

.hours {
    display: grid;
    border-right: 1px solid #000;
}

.hours:last-child {
    border-right: none;
}
</style>
<!-- :style="`grid-template-columns: 109px minmax(50px, ${allPaytypes.length * 20}px) 1fr;`"> -->

