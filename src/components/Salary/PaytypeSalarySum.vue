<template>

    <div v-if="!isFixed">{{ salarySum }}</div>
    <div v-else> {{ salarySum }} фикс</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['teacher', 'paytype', 'month'],

    data() {
        return {
            isFixed: false,
            sum: 0,
        }
    },

    computed: {
        ...mapGetters([
            'timesheetByMonthPaytypeTeacher',
            'allBillings',
            'teacherById',
            'paytypeSalaryByPaytypeTeacherMonth',
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

        salarySum() {
            let result = 0
            let billing
            const billings = this.teacherById(this.teacher).billing

            if (billings.length) {
                billings.forEach(item => {
                    this.allBillings.forEach(elem => {
                        if (elem.id == item && elem.pay_type == this.paytype) {
                            billing = elem
                        }
                    })
                })
            }

            if (billing) {
                if (!billing.isFixed) {
                    result = this.summaryHours * billing.rate * billing.ratio
                } else {
                    result = billing.rate * billing.ratio
                    this.isFixed = true
                }
            }

            this.sum = result

            return result

        },

    },

    watch: {
        sum(val) {
            const obj = {
                teacher: this.teacher,
                month: this.month,
                paytype: this.paytype,
                sum: val
            }
            const data = this.paytypeSalaryByPaytypeTeacherMonth(this.paytype, this.teacher, this.month)

            if (data) this.$store.commit('deletePaytypeSalary', obj)

            this.$store.commit('addPaytypeSalary', obj)


        }
    }

}
</script>

<style  scoped>

</style>