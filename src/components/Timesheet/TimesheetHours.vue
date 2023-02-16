<template>
    <div>
        {{ hours }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: [
        'day',
        'month',
        'paytype',
        'teacher',
    ],

    computed: {
        ...mapGetters([
            'timesheetByDatePaytypeTeacher'
        ]),

        date() {
            if ((this.day / 10) < 1) return this.month + '-0' + this.day
            else return this.month + '-' + this.day
        },

        hours() {
            const data = this.timesheetByDatePaytypeTeacher(this.date, this.paytype, this.teacher)
            if (data) {
                return data.hoursAmount
            }
        },
    }


}
</script>

<style lang="scss" scoped>

</style>