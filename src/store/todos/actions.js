import Axios from 'axios'
const url = 'https://5d3a5824fa091c00144708ed.mockapi.io/api/todos'

export default {
    
    addTodo({ state, commit }, payload) {
        // make api request to store todo
        // commit todo to vuex store
        payload['done'] = false;

        Axios.post(url, payload)
            .then((response) => {
                commit('addTodo', response.data)
            })
    },
    editTodo({state, commit}, data){
        Axios.put(url+`/${data.id}`, data)
        .then((response)=>{
            commit('editTodo', response.data)
        })

    },
    deleteTodo({state, commit}, data){
        Axios.delete(url+`/${data.id}`)
        .then(()=>{
            commit('removeTodo', data)
        })

    },
    getTodos({ commit }) {
        Axios.get(url).then(response => {
            commit('addTodos', response.data)
        })
    },
    checkTodo({state, commit}, todo){
        Axios.put(url+`/${todo.id}`, {...todo.done})
        .then((response)=>{
            commit('editTodo', response.data)
        })
    }
}
