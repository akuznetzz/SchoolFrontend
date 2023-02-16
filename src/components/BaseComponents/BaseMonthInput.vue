<template>
    <input type="month" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    props: ['value']
}
</script>

<style lang="sass" scoped>

</style>