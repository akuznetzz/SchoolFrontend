<template>
    <div>
        <h4>Список предметов</h4>
        <ul>
            <li v-for="subject, index in subjects" :key="subject.id">
                {{ subject.name }}
                <button @click.prevent="$emit('remove', subject.id)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['subjects'],

}
</script>

<style scoped>
li {
    text-align: left;
}
</style>