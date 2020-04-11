import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const data = localStorage.getItem('userData')
const currentUser = data && JSON.parse(data)

export default {
    namespaced: true,
    state: {
        currentUser,
        token: currentUser.sessionToken,
    },
    mutations,
    getters,
    actions
}
