<template>
    <div>
        <form @change.prevent="changeSubject">
            <div v-for="subject, index in allSubjects" :key="index">
                <input type="checkbox" :value="subject.id" v-model="selectedSubjects">
                <label :for="subject.name"> {{ subject.name }}</label>
            </div>

        </form>
    </div>
</template>

<script>
import SubjectService from '@/services/SubjectService.js';
import { eventBus } from '../../main.js'
import { mapGetters } from 'vuex';


export default {
    props: ['subjects'],

    data() {
        return {
            // allSubjects: [],
            selectedSubjects: null
        }
    },

    computed: {
        ...mapGetters(['allSubjects']),
        // selectedSubjects() {
        //     return this.subjects
        // }
    },

    created() {
        // await SubjectService.getSubject()
        //     .then(resp => this.allSubjects = resp.data)
        //     .catch(err => console.log(err))

        // console.log(this.$store.getters.allSubjects)

        // this.selectedSubjects = this.subjects

        // console.log(this.subjects)

    },

    methods: {
        changeSubject() {
            eventBus.$emit('change-subject', this.selectedSubjects)
        }
    }

}
</script>

<style scoped>

</style>