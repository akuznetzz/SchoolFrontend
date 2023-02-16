<template>
    <form @change.prevent="changeSubject">
        <div v-for="subj, index in allSubjects" :key="index">
            <input type="checkbox" :value="subj.id" v-model="subject">
            <label :for="subj.name"> {{ subj.name }}</label>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    props: ['subj'],

    data() {
        return {
            subject: []
        }
    },

    computed: {
        ...mapGetters([
            'allSubjects'
        ])
    },

    methods: {
        changeSubject() {
            this.$emit('setSubj', this.subject)
        }
    },

    watch: {
        subj(val) {
            this.subject = val
        }
    },

    created() {
        if (this.subj) {
            this.subject = [...this.subj]
        }

    }

}
</script>

<style scoped>
form {
    text-align: left;
}
</style>