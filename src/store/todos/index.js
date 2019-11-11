import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
    namespaced: true,
    state: {
        title: 'TODOs List',
        todos: []
    },
    mutations,
    getters,
    actions
}
