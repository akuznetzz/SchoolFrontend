<template>


    <div class="cell" v-if="slot" :style="`background-color: ${color}`">
        {{ mark }}
    </div>
    <div class="cell" v-else> </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['student', 'date'],

    computed: {
        ...mapGetters([
            'journalSlotByDateStudentSubject',
            'params',
            'colorByKey'
        ]),

        slot() {
            return this.journalSlotByDateStudentSubject(this.date, this.student, this.params.subject)

        },

        mark() {
            return this.slot.mark
        },

        color() {
            const key = this.slot.colored_mark
            return this.colorByKey(key)
        }

    }



}
</script>

<style  scoped>

</style>