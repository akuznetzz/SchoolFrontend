<template>
    <div>
        <div class="go-back-link">
            <router-link :to="{ name: 'TeachersList' }"> К списку</router-link>
        </div>
        <div v-if="teachersLoaded">
            <TeacherInput :id="id" @setTeacherBaseInfo="setBaseInfo" />
            <subjects-for-teacher-card :subj="subj" @setSubj="setSubject" />
            <div>
                <div class="billings">
                    <billing-table-header />
                    <div class="billing__body">
                        <billing-item-for-teacher-card v-if="bills" v-for="bill in bills" :key="bill" :bill="bill"
                            @changeBilling="test" @setBilling="setBilling" />
                    </div>
                </div>

                <billing-item-for-teacher-card @setBilling="setBilling" class="add-billing" />

            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import SubjectsForTeacherCard from '../Subject/SubjectsForTeacherCard.vue';
import TeacherInput from './TeacherInput.vue';
import BillingItemForTeacherCard from '@/components/Billing/BillingItemForTeacherCard.vue';
import BillingTableHeader from '@/components/Billing/BillingTableHeader.vue';
import TeacherService from '@/services/TeacherService';
import BillingService from '@/services/BillingService';

export default {
    props: ["id"],

    data() {
        return {
            subj: null,
            bills: null,
            teacher: null
        }
    },
    components: {
        TeacherInput,
        SubjectsForTeacherCard,
        BillingItemForTeacherCard,
        BillingTableHeader,
    },

    methods: {
        editTeacher() {
            this.$store.commit('editTeacher', this.teacher)
            TeacherService.editTeacher(this.teacher.id, this.teacher).catch(err => console.log(err))
        },

        setBaseInfo(data) {
            if (this.teacher) {
                for (let key in data) {
                    this.teacher[key] = data[key]
                }
                this.editTeacher()


            } else {
                this.teacher = { ...data }
                TeacherService.setTeacher(this.teacher)
                    .then(resp => {
                        this.teacher.id = resp.data.id
                        this.$store.commit('addTeacher', resp.data)
                    })
                    .catch(err => console.log(err))
            }

        },

        setSubject(data) {
            if (this.teacher) {
                this.teacher.subject = [...data]
                this.editTeacher()
                console.log(this.teacher)
            }
        },

        changeBilling() {
            //TODO: изменение оплаты на лету
        },

        setBilling(data) {
            if (data.id) {
                const index = this.teacher.billing.indexOf(data.id)
                this.teacher.billing.splice(index, 1)
                this.editTeacher()
            } else {
                if (this.teacher) {
                    if (!this.teacher.billing) this.teacher.billing = []

                    const billing = this.getBillingByAllKeys(data)

                    if (billing) {
                        this.teacher.billing.push(billing.id)
                        this.editTeacher()

                    } else {
                        BillingService.setBilling(data).then(resp => {
                            this.$store.commit('addBilling', resp.data)
                            this.teacher.billing.push(resp.data.id)
                            this.editTeacher()
                        })

                    }
                }
            }
        },

        test(data) {
            console.log(data)
        },

        loaded() {
            if (this.teachersLoaded) {
                if (this.id) {
                    this.teacher = { ... this.teacherById(this.id) }
                    this.subj = this.teacher.subject
                    this.bills = this.teacher.billing
                }
            }
        }
    },

    computed: {
        ...mapGetters([
            'teacherById',
            'getBillingByAllKeys'
        ]),

        teachersLoaded() {
            return this.$store.state.teachers.teachersLoaded
        },

    },

    watch: {
        teachersLoaded() {
            this.loaded()
        }
    },

    mounted() {
        this.loaded()
    }
}
</script>

<style lang="scss"  scoped>
.billings {
    display: grid;
    grid-template-rows: repeat(3, auto);
    margin-top: 20px;
}

.billing {

    &__body {
        border-bottom: 1px solid #000;
        border-left: 1px solid #000;
    }


}

.add-billing {
    margin-top: 10px;

}

.go-back-link {
    text-align: left;
}
</style>