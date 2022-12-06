<template>
    <div>
        <TeacherCard :teacher="teacher" :billings="billings" :subjects="teacher.subject"
            @change-teacher="changeTeacher" />

    </div>
</template>

<script>
import TeacherCard from '@/components/Teacher/TeacherCard.vue'
import TeacherService from '@/services/TeacherService.js';
import BillingService from '@/services/BillingService.js';
import { eventBus } from '../main.js'
import checkBillings from '@/services/checkBillings.js';






export default {
    props: ['id'],

    data() {
        return {
            teacher: {},
            billings: [],
        }
    },

    components: {
        TeacherCard,
    },

    async created() {


        await TeacherService.getTeachers(this.id)
            .then(resp => this.teacher = resp.data)
            .catch(err => console.log(err))

        if (this.teacher.billing.length) {
            this.teacher.billing.forEach(e => {
                BillingService.getBilling(e)
                    .then(resp => this.billings.push(resp.data))
                    .catch(err => console.log(err))

            });
        }

        eventBus.$on('remove-billing', id => {
            const index1 = this.teacher.billing.indexOf(id)
            this.teacher.billing.splice(index1, 1)
            TeacherService.changeTeacher(this.id, this.teacher)

            const index2 = this.billings.findIndex(item => item.id == id)
            this.billings.splice(index2, 1)

        })

        eventBus.$on('add-billing', data => {
            checkBillings(data)
                .then(resp => {
                    this.billings.push(resp)
                    this.teacher.billing.push(resp.id)
                    TeacherService.changeTeacher(this.id, this.teacher)
                })
        })

        eventBus.$on('change-subject', subjects => {
            this.teacher.subject = subjects
            // console.log(this.teacher)
            TeacherService.changeTeacher(this.id, this.teacher)
        })
    },

    methods: {
        changeTeacher(teacher) {
            TeacherService.changeTeacher(this.id, teacher)
        }
    }


}
</script>

<style scoped>

</style>

