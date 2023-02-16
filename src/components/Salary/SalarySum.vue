<template>
    <div>
        {{ sum }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['teacher', 'month'],

    computed: {
        ...mapGetters([
            'paytypeSalaryByTeacherMonth'
        ]),

        sum() {
            let result = 0
            const data = this.paytypeSalaryByTeacherMonth(this.teacher, this.month)

            if (data.length) {
                result = data.reduce((sum, item) => sum + item.sum, result)
            }

            return result
        }
    }

}
</script>

<style scoped>

</style>