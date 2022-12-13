<template>
    <div>
        <h4>Список кабинетов</h4>
        <ul>
            <li v-for="group in allClasses" :key="group.id">
                {{ group.name }}
                <button @click.prevent="$emit('remove', group.id)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'allClasses'
        ])
    }
}
</script>

<style scoped>
li {
    text-align: left;
}
</style>