<template>
    <div>
        <nav>
            <router-link :to="{ name: 'Teachers' }">Учителя</router-link>
            <router-link :to="{ name: 'StudentsList' }">Ученики</router-link>
            <router-link :to="{ name: 'GroupsList' }">Классы</router-link>
            <router-link :to="{ name: 'SubjectsList' }">Предметы</router-link>
            <router-link :to="{ name: 'ClassroomsList' }">Кабинеты</router-link>
            <router-link :to="{ name: 'Timepairs' }">Время уроков</router-link>
            <router-link :to="{ name: 'Paytypes' }">Типы оплаты</router-link>





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