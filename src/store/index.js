import Vue from 'vue'
import Vuex from 'vuex'

import globalMutations from './mutations'
import globalActions from './actions'
Vue.use(Vuex)

import todos from './todos'
import user from './user'

const store = new Vuex.Store({
    state:{
        activeApp:'home',
    },
    mutations: globalMutations,
    actions: globalActions,
    modules: {
        todos,
        user
    }
})

export default store
