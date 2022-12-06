<template>
    <div>

        <component v-for="form, index in formStore" :is="form" :paytypes="paytypes" :key="index"></component>
        <p>
            <button @click.prevent="pushForm">Добавить оплату</button>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import BillingForm from './BillingForm.vue'

export default {
    components: {
        BillingForm
    },

    data() {
        return {
            billing: {},
            formStore: [],
            paytypes: []
        }
    },

    methods: {


        pushForm() {
            this.formStore.push(BillingForm)
        },

    },

    created() {

        axios
            .get("http://127.0.0.1:3000/api/rfw/school/pay_type/")
            .then(resp => this.paytypes = resp.data)

    }

}
</script>

<style scoped>

</style>

