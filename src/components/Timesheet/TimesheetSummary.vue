<template>
    <div>
        {{ summaryHours }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['teacher', 'paytype', 'month'],

    computed: {
        ...mapGetters([
            'timesheetByMonthPaytypeTeacher'
        ]),

        summaryHours() {
            let result = 0
            let data = this.timesheetByMonthPaytypeTeacher(this.month, this.paytype, this.teacher)
            if (data.length) {
                data.forEach(e => {
                    result += e.hoursAmount
                });
            }
            return result
        },

    }
}
</script>

<style lang="scss" scoped>

</style>