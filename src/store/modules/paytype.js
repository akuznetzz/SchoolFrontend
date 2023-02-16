import PaytypeService from "@/services/PaytypeService.js"

const state = {
    paytypes: []
}

const getters = {
    allPaytypes(state) {
        return state.paytypes
    },
    paytypeById: (state) => (id) => {
        return state.paytypes.find(item => item.id == id)
    }

}


const mutations = {
    setPaytypes(state, payload) {
        return state.paytypes = payload
    },
    addPaytype(state, payload) {
        return state.paytypes.push(payload)
    }
}
const actions = {
    async setPaytypes({ commit }) {
        let data
        await PaytypeService.getPaytype()
            .then(resp => data = resp.data)
            .catch(err => console.log(err))

        commit('setPaytypes', data)
    }

}

export default {
    state, getters, mutations, actions

}
