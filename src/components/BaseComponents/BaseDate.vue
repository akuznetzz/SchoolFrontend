<template>
    <div>
        <div v-if="!newDate"> Сегодня {{ todayString }} </div>
        <div v-else> Выбрано:</div>
        <input name="date-input" type="date" v-model="newDate" :max="inputMaxDate">
        <label v-if="newDate" for="date-input">{{ chosenDateString }}</label>
        <label v-else for="date-input">Выбрать другую дату</label>

        <!-- <button @click="toggle">toggle</button> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            // month: null,
            // day: null,
            submited: false,
            // date: null,
            newDate: null,


        }
    },


    computed: {
        ...mapGetters([
            'today',
            'monthNameByNumberFromNull',
            'year',
            'dayOfWeek',
            'dayOfMonth',
            'getMonth',
            'dayOfWeekByNumber'

        ]),

        inputMaxDate() {
            let month = this.getMonth + 1
            if ((month / 10) < 1) {
                month = '0' + month
            }

            return this.year + '-' + month + '-' + this.dayOfMonth
        },

        todayString() {
            return this.dayOfMonth + ' ' + this.monthNameByNumberFromNull(this.getMonth) + ' ' + this.year + ', ' + this.dayOfWeek
        },

        chosenDateString() {
            const date = new Date(this.newDate)
            return this.dayOfWeekByNumber(date.getDay())
        }
    },

    watch: {
        newDate(val) {
            this.$emit('getDate', val)
        }
    },



    methods: {
        toggle() {
            this.isChanged = true
            // console.log(this.newDate)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>