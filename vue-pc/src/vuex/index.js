import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import vuexModules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: vuexModules,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})