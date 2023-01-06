<template>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['day', 'group'],

    data() {
        return {
            daySchedule: []
        }
    },

    created() {
        setTimeout(() => {
            this.daySchedule = this.getDayScheduleByGroup(this.day, this.group)
            console.log(this.daySchedule)
        }, 200)
    },

    computed: {
        ...mapGetters([
            'getDayScheduleByGroup',
            'allTimepairs',
            'subjectById',
            'teacherById'
        ])
    },


}
</script>

<style lang="scss" scoped>

</style>