
const state = {
    params: {
        subject: null,
        group: null,
        start: null,
        end: null
    }
}

const getters = {
    params(state) {
        return state.params
    }

}


const mutations = {
    setParams(state, payload) {
        for (let key in payload) {
            state.params[key] = payload[key]
        }
    },


}
const actions = {


}

export default {
    state, getters, mutations, actions

}
