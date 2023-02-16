import JournalService from "@/services/JournalService.js"

const state = {
  journal: []
}

const getters = {
  journal(state) {
    return state.journal
  },
  journalSlotById: (state) => (id) => {
    return state.journal.find(item => item.id == id)
  },
  journalSlotByDateStudentSubject: (state) => (date, student, subject) => {
    return state.journal.find(item => item.date === date && item.student === student && item.subject === subject)
  },
  markDatesBySubjectStudentDateRange: (state) => (subject, student, start, end) => {
    return state.journal.filter(item => item.subject == subject && item.student == student && item.date >= start && item.date <= end)
      .map(item => item.date)
  },
  journalSlotByDateStudentSubject: (state) => (date, student, subject) => {
    return state.journal.find(item => item.date == date && item.student == student && item.subject == subject)
  }


}


const mutations = {
  setJournal(state, payload) {
    return state.journal = payload
  },
  addJournalSlot(state, payload) {
    return state.journal.push(payload)
  },
  editJournalSlot(state, payload) {
    const index = state.journal.findIndex(item => item.id === payload.id)
    state.journal[index].mark = payload.mark
    state.journal[index].colored_mark = payload.colored_mark
  }
}
const actions = {
  async setJournal({ commit }) {
    let data
    await JournalService.getJournalSlot()
      .then(resp => data = resp.data)
      .catch(err => console.log(err))

    commit('setJournal', data)
  }

}

export default {
  state, getters, mutations, actions

}
