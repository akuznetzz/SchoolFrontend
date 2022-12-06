<template>
    <form @submit.prevent="$emit('push-subject', subject)">
        <!-- <input type="text" v-model="subject.school" disabled> -->
        <input id="subjName" type="text" placeholder="название предмета" v-model="subject.name">
        <input type="submit" value="Добавить">
    </form>
</template>

<script>

export default {
    data() {
        return {
            subject: {
                // school: 1,
                name: '',
                // has_subject: []
            }
        }
    },

}
</script>

<style scoped>

</style>