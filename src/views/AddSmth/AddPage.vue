<template>
    <div>
        <nav>
            <router-link :to="{ name: 'AddSchedule' }">Добавить расписание</router-link>
            <router-link :to="{ name: 'AddClassroom' }">Добавить кабинет</router-link>
            <router-link :to="{ name: 'AddSubject' }">Добавить предмет</router-link>




        </nav>
        <router-view class="view" />
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>