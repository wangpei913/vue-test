const state = {
    isToken: ''
}

const mutations = {
    setToken: (state, data) => {
        state.isToken = data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}