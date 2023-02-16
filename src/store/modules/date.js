
const state = {
    today: null,
    daysOfWeek: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ],
    dayOfWeek: null,
    dayOfMonth: null,
    month: null,
    monthName: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    year: null
}

const getters = {
    today(state) {
        return state.today
    },

    dayOfWeekByNumber: (state) => (n) => {
        return state.daysOfWeek[n]
    },
    dayOfMonth(state) {
        return state.dayOfMonth
    },
    monthNameByNumberFromNull: (state) => (n) => {
        return state.monthName[n]
    },
    year(state) {
        return state.year
    },
    dayOfWeek(state) {
        return state.dayOfWeek
    },
    getMonth(state) {
        return state.month
    }

}


const mutations = {
    setToday(state, payload) {
        return state.today = payload
    },
    setDayOfWeek(state, payload) {
        return state.dayOfWeek = payload
    },
    setDayOfMonth(state, payload) {
        return state.dayOfMonth = payload
    },
    setMonth(state, payload) {
        return state.month = payload
    },
    setYear(state, payload) {
        return state.year = payload
    }

}
const actions = {
    setToday({ commit, getters }) {
        const setDate = () => {
            const date = new Date()
            const dayOfWeek = getters.dayOfWeekByNumber(date.getDay())
            const dayOfMonth = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            const today = year + '-' + (month + 1) + '-' + dayOfMonth


            commit('setDayOfWeek', dayOfWeek)
            commit('setDayOfMonth', dayOfMonth)
            commit('setMonth', month)
            commit('setYear', year)
            commit('setToday', today)
        }

        setDate()

        setInterval(() => {
            const date = new Date()
            if (date.getDate() !== getters.dayOfMonth) { setDate() }

        }, 1000 * 60 * 60)

    }

}

export default {
    state, getters, mutations, actions

}
