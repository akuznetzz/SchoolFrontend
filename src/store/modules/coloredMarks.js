const state = {
    colors: {
        '1': '#ff6161',
        '2': 'orange',
        '3': '#44d449'
    }
}

const getters = {
    colorByKey: (state) => (key) => {
        return state.colors[`${key}`]
    }
}

export default {
    state, getters
}