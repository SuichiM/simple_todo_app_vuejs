import Axios from 'axios'
const url = 'https://5d3a5824fa091c00144708ed.mockapi.io/api/todos'

export default {
    
    addTodo({ state, commit }, payload) {
        // make api request to store todo
        // commit todo to vuex store
        Axios.post(url, payload)
            .then(() => {
                commit('addTodo', payload)
            })
    },
    editTodo({state, commit}, data){
        console.log(data);
        Axios.put(url+`/${data.id}`, data)
        .then((response)=>{
            commit('editTodo', response.data)
        })

    },
    deleteTodo({state, commit}, data){
        console.log(data.id);
        Axios.delete(url+`/${data.id}`)
        .then(()=>{
            commit('removeTodo', data)
        })

    },
    getTodos({ commit }) {
        Axios.get(url).then(response => {
            commit('addTodos', response.data)
        })
    }
}
