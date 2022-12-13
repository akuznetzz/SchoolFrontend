<template>
    <div>
        <TeacherCard :teacher="teacher" :billings="billings" :subjects="subjects" @change-teacher="changeTeacher"
            @add-teacher="addTeacher" />
    </div>
</template>

<script>
import AddBilling from '@/components/Billing/AddBilling.vue';
import checkBillings from '@/services/checkBillings.js';
import TeacherService from '@/services/TeacherService.js';
import SubjectService from '@/services/SubjectService.js';
import TeacherCard from '@/components/Teacher/TeacherCard.vue';
import { eventBus } from '../../main.js'

export default {
    components: {
        AddBilling,
        TeacherCard,
    },

    data() {
        return {
            teacher: {},
            school: 1,
            // paytypes: [],
            billings: [],
            // billComponents: [],
            // addButton: {},
            // allSubjects: [],
            subjects: [],
        }
    },

    methods: {

        changeTeacher(teacher) {
            this.teacher = teacher
        },

        addTeacher(action) {

            this.teacher.school = this.school

            if (this.billings.length) {
                this.teacher.billing = []
                for (let bill of this.billings) {
                    this.teacher.billing.push(bill.id)
                }
            }

            // if (this.subjects.length) {
            //     this.teacher.subject = this.subjects
            // }

            TeacherService.setTeacher(this.teacher)
                .then(resp => console.log(resp.data))
                .catch(err => console.log(err))

            if (action === 'onemore') {
                // alert('добавлено успешно') 
                window.location.reload()
            } else if (action === 'close') {
                window.location.href = 'http://127.0.0.1:8080/teachers'
                // this.$router.push({ name: 'TeacherList' })
            }


        },
    },

    created() {

        SubjectService.getSubject()
            .then(resp => this.allSubjects = resp.data)
            .catch(err => console.log(err))

        eventBus.$on('add-billing', data => {
            checkBillings(data)
                .then(resp => this.billings.push(resp))
                .catch(err => console.log(err))

        })

        eventBus.$on('remove-billing', id => {
            const index = this.billings.findIndex(item => item.id == id)
            this.billings.splice(index, 1)
        })

        eventBus.$on('change-subject', data => {
            this.teacher.subject = data
        })
    }


}
</script>

<style lang="scss" scoped>

</style>