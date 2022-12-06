<template>
    <div>
        <h4>Список кабинетов</h4>
        <ul>
            <li v-for="classroom in classrooms" :key="classroom.id">
                {{ classroom.name }}
                <button @click.prevent="$emit('remove', classroom.id)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['classrooms'],

}
</script>

<style scoped>
li {
    text-align: left;
}
</style>