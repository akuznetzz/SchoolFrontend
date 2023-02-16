<template>
    <div class="billing__row" @change="changeBilling">
        <select name="" id="" v-model="billing.pay_type">
            <option selected disabled>---</option>
            <option v-for="ptype in allPaytypes" :value="ptype.id"> {{ ptype.name }}</option>
        </select>

        <input type="number" min="0" max="200000" v-model.number="billing.rate" required>
        <input type="number" min="0.1" max="10" step="0.1" placeholder="1.0" v-model.number="billing.ratio">
        <div>
            <input type="checkbox" v-model.number="billing.isFixed">
        </div>
        <button :class="bill ? 'remove' : 'add'" @click="setBilling"> </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

            billing: {
                pay_type: null,
                rate: null,
                ratio: 1,
                isFixed: false,
            }
        }
    },

    props: ['bill'],

    computed: {
        ...mapGetters([
            'billingById',
            'paytypeById',
            'allPaytypes',

        ]),

    },

    created() {
        if (this.bill) {
            const b = this.billingById(this.bill)

            if (b) {
                this.billing = { ...b }
            }
        }
    },

    methods: {
        setBilling() {
            this.$emit('setBilling', this.billing)
        },

        changeBilling() {
            this.$emit('changeBilling', this.billing)
        }
    }


}
</script>

<style lang="scss" scoped>
.billing__row {
    display: grid;
    grid-template-columns: 120px repeat(3, 60px) 100px;
    border-right: 1px solid #000;

    div {
        text-align: center;
        border-top: 1px solid #000;

    }



}

.billing__row.add-billing>div {
    border-bottom: 1px solid #000;
}

button.add::before {
    content: 'Добавить';
}

button.remove::before {
    content: 'Удалить';
}
</style>