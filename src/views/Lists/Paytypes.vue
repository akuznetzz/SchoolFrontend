<template>
    <div>
        <div>
            <input type="text" v-model="name">
            <button @click="addPaytype">Добавить</button>
        </div>

        <h4>Список типов оплаты</h4>
        <div class="paytype-list">
            <div v-for="ptype, index in allPaytypes">
                <!-- <span>{{ index }}</span> -->
                <span>{{ ptype.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PaytypeService from '@/services/PaytypeService';

export default {
    data() {
        return {
            name: null
        }
    },

    computed: {
        ...mapGetters([
            'allPaytypes'
        ])
    },
    methods: {
        addPaytype() {
            PaytypeService.setPaytype({ name: this.name })
                .then(resp => this.$store.commit('addPaytype', resp.data))
                .catch(err => console.log(err))
        },
    }

}
</script>

<style lang="scss" scoped>
.paytype-list {
    text-align: left;
}
</style>