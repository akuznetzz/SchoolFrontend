<template>
    <form @submit.prevent="$emit('push-classroom', classroom)">
        <input type="text" v-model="classroom.school" disabled>
        <input id="roomName" type="text" placeholder="название кабинета" v-model="classroom.name">
        <input type="submit" value="Добавить">
    </form>
</template>

<script>


export default {
    data() {
        return {
            classroom: {
                school: 1,
                name: ''
            }
        }
    },

}
</script>

<style lang="scss" scoped>

</style>