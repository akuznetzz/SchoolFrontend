<template>
    <div>
        <div>
            Журнал оценок за период
        </div>
        <form @change="change">
            <input type="date" name="start_date" v-model="params.start">
            <label for="start_date">Начало периода</label><br>
            <input type="date" name="end_date" v-model="params.end">
            <label for="end_date">Конец периода</label>
            <br>

            <select v-model="params.subject">
                <option value="" disabled selected>---</option>
                <option v-for="subject in allSubjects" :value="subject.id">{{ subject.name }}</option>
            </select>

            <select v-model="params.group">
                <option value="" disabled selected>---</option>
                <option v-for="group in allClasses" :value="group.id">{{ group.name }}</option>
            </select>
        </form>

        <br>
        <JournalTable v-if="fullParams" />
    </div>
</template>

<script>
import JournalTable from '@/components/Journal/JournalTable.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        JournalTable
    },

    data() {
        return {
            params: {
                subject: 1,
                group: null,
                start: '2023-01-23',
                end: '2023-01-27'
            },

            fullParams: false

        }
    },

    computed: {
        ...mapGetters([
            'allSubjects',
            'allClasses'
        ])
    },

    methods: {

        change() {
            this.fullParams = true
            for (let key in this.params) {
                if (!this.params[key]) this.fullParams = false
            }
            if (this.fullParams) this.$store.commit('setParams', this.params)

        }
    },



}
</script>

<style lang="scss" scoped>

</style>