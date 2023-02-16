<template>
    <div>
        <div>
            Расчёт зарплаты
            <base-month-input v-model="month" />
        </div>
        <div class="wrapper">
            <div class="header">
                <div class="header__names">
                    <div class="title">ФИО</div>
                </div>
                <div class="header__columns" :style="`grid-template-columns: repeat(${allPaytypes.length}, 1fr)`">
                    <div class="header__column" v-for="paytype in allPaytypes">
                        <div class="column__title" :style="`grid-column: 1 / 3`"> {{ paytype.name }}</div>
                        <div class="column__hours">Часы</div>
                        <div class="column__sum">Сумма</div>
                    </div>
                </div>
                <div class="header__summary">
                    Итого
                </div>
            </div>
            <div class="body">
                <div class="teacher__row" v-for="teacher in allTeachers">
                    <div class="teacher__name">{{ teacher.last_name }}</div>
                    <div class="teacher__salary" :style="`grid-template-columns: repeat(${allPaytypes.length}, 1fr)`">
                        <div class="salary__cell" v-for="paytype in allPaytypes">
                            <TimesheetSummary class="hours cell" :teacher="teacher.id" :paytype="paytype.id"
                                :month="month" />
                            <PaytypeSalarySum class="salary cell" :teacher="teacher.id" :paytype="paytype.id"
                                :month="month" />
                        </div>
                    </div>

                    <SalarySum class="summary cell" :teacher="teacher.id" :month="month" />

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TeacherPaytypeSalary from '@/components/Salary/TeacherPaytypeSalary.vue';
import TimesheetSummary from '@/components/Timesheet/TimesheetSummary.vue';
import SalarySum from '@/components/Salary/SalarySum.vue';
import PaytypeSalarySum from '@/components/Salary/PaytypeSalarySum.vue';


export default {
    components: {
        TeacherPaytypeSalary,
        TimesheetSummary,
        SalarySum,
        PaytypeSalarySum
    },

    data() {
        return {
            month: '2023-01'
        }
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allPaytypes'
        ])
    }
}
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-rows: 40px 1fr;
}

.header {
    display: grid;
    grid-template-columns: 110px 1fr 70px;
}

.header__names {
    border: 1px solid #000;
}

.header__columns {
    display: grid;
    /* border: 1px solid #000;
    border-left: none; */
}



.header__column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #000;
    border-left: none;
}

.header__summary {
    border: 1px solid #000;
    border-left: none;
}


.title {}

.column {}

.column__title {}

.column__hours {
    border-top: 1px solid #000;
    border-right: 1px solid #000;
}

.column__sum {
    border-top: 1px solid #000;
}

.body {
    display: grid;
}

.teacher__row {
    display: grid;
    grid-template-columns: 110px 1fr 70px;

}

.teacher__name {
    border: 1px solid #000;
    border-top: none
}

.teacher__salary {
    display: grid;
}

.salary__cell {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.cell {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
}

.hours {}

.salary {}

.summary {}
</style>