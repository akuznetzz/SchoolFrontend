<template>
    <div>
        {{ number.id }}
        <button @click="test">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 1,
            item: 123

        }
    },

    methods: {
        test() {
            this.number++
        }
    },

    watch: {
        number(val) {
            this.$emit('test', {
                elem1: val,
                elem2: this.item
            })
        }
    }



}
</script>

<style lang="scss" scoped>

</style>