const state = {
    isFixed: 'vertical'
}

const mutations = {
    setDriection: (state, data) => {
        state.isFixed = data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}