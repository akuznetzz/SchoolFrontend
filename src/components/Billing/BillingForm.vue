<template>
    <form class="add-billing" @submit.prevent="addBilling">
        <select @change="addName" class="paytype-select" v-model="billing.pay_type.id" required>
            <option disabled value="">----</option>
            <option v-for="paytype in paytypes" :value="paytype.id">{{ paytype.name }}</option>
        </select>
        <input type="number" min="0" max="200000" v-model.number="billing.rate" required>
        <input type="number" min="0.1" max="10" step="0.1" placeholder="1.0" v-model.number="billing.ratio">
        <input type="checkbox" v-model.number="billing.isFixed">
        <input type="submit" value="Ок">
        <button @click.prevent="cancel">отмена</button>
    </form>
</template>

<script>

import { eventBus } from '../../main.js'

export default {
    props: ['paytypes'],

    data() {
        return {
            billing: {
                rate: null,
                ratio: null,
                isFixed: false,
                pay_type: { name: '', id: null, },
            },
        }
    },

    methods: {
        addName() {
            const el = document.querySelector('.paytype-select')
            this.billing.pay_type.name = el.options[el.selectedIndex].text

        },

        cancel() {
            this.$el.remove()
        },

        addBilling() {
            eventBus.$emit('add-billing', this.billing)
            this.$el.remove()
        }

    },

}
</script>

<style scoped>

</style>

<!-- $emit('cancel', $el) -->