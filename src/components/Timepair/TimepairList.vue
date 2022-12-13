<template>
    <div>
        <h4>Время уроков</h4>
        <ul>
            <li v-for="timepair in allTimepairs" :key="timepair.id">
                {{ (timepair.name + 'урок:' + ' ' + timepair.time_start + ' - ' + timepair.time_end) }}
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
            'allTimepairs'
        ])
    }
}
</script>

<style scoped>
li {
    text-align: left;
}
</style>