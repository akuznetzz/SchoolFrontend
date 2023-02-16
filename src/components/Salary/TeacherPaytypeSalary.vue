<template>
    <div>
        <PaytypeSalarySum :props="$props" />
    </div>
</template>

<script>
import PaytypeSalarySum from '@/components/Salary/PaytypeSalarySum.vue';
import { mapGetters } from 'vuex';
import SalaryService from "@/services/SalaryService.js"

export default {
    props: ['teacher', 'paytype', 'month'],

    data() {
        return {
            sum: null,
        }
    },

    components: {
        PaytypeSalarySum
    },

    // data() {
    //     return {
    //         isFixed: false
    //     }
    // },

    // computed: {
    //     ...mapGetters([
    //         'timesheetByMonthPaytypeTeacher',
    //         'allBillings',
    //         'teacherById',
    //         'salaryByPaytypeTeacherMonth'
    //     ]),

    //     summaryHours() {
    //         let result = 0
    //         let data = this.timesheetByMonthPaytypeTeacher(this.month, this.paytype, this.teacher)
    //         if (data.length) {
    //             data.forEach(e => {
    //                 result += e.hoursAmount
    //             });
    //         }
    //         return result
    //     },

    //     salarySum() {
    //         let result = 0
    //         let billing
    //         const billings = this.teacherById(this.teacher).billing

    //         if (billings.length) {
    //             billings.forEach(item => {
    //                 this.allBillings.forEach(elem => {
    //                     if (elem.id == item && elem.pay_type == this.paytype) {
    //                         billing = elem
    //                     }
    //                 })
    //             })
    //         }

    //         if (billing) {
    //             if (!billing.isFixed) {
    //                 result = this.summaryHours * billing.rate * billing.ratio
    //             } else {
    //                 result = billing.rate * billing.ratio
    //                 this.isFixed = true
    //             }

    //         }

    // const salary = this.salaryByPaytypeTeacherMonth(this.paytype, this.teacher, this.month)

    // if (salary) {
    //     SalaryService.editSalary(salary.id, {
    //         sum: result
    //     })
    // } else {
    //     SalaryService.setSalary({
    //         teacher: this.teacher,
    //         paytype: this.paytype,
    //         month: this.month,
    //         sum: result
    //     })
    //         .then(resp => this.$store.commit('addSalary', resp.data))
    //         .catch(err => console.log(err))
    // }



    //         return result

    //     },

    // },

}
</script>

<style scoped>

</style>