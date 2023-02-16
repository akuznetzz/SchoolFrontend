import BillingService from "@/services/BillingService.js"

const state = {
  billings: []
}

const getters = {
  allBillings(state) {
    return state.billings
  },
  billingById: (state) => (id) => {
    return state.billings.find(item => item.id == id)
  },
  getBillingByAllKeys: (state) => (payload) => {
    const data = state.billings.find(item => {
      let result = true
      for (let key in payload) {
        if (payload[key] != item[key]) result = false
      }
      return result
    })

    return data
  }

}


const mutations = {
  setBillings(state, payload) {
    return state.billings = payload
  },
  addBilling(state, payload) {
    return state.billings.push(payload)
  }
}
const actions = {
  async setBillings({ commit }) {
    let data
    await BillingService.getBilling()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setBillings', data)
  }

}

export default {
  state, getters, mutations, actions

}
