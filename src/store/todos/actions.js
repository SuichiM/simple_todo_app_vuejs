import Axios from 'axios'
const url = 'https://5d3a5824fa091c00144708ed.mockapi.io/api/todos'

export default {
    getTodosList({state, commit}){
        let list = cache.get('todo_list');
        
        if (list)
            return commit('addTodoLists', list);

        apiClient.get('/todo_list')
        .then(function ({data}) {
            commit('addTodoLists', data.results);
            cache.set('todo_list', data.results);
          })
          .catch(function (error) {
            console.log(error);
          })

        
    },
    addTodo({ state, commit }, payload) {
        // make api request to store todo
        // commit todo to vuex store
        payload['done'] = false;

        payload['list'] = { "__type": "Pointer", 
                            "className": "todo_list", 
                            "objectId": payload['list'] };

        apiClient.post('/todos', payload)
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
    getTodosByListID({commit}, listId){

        let todos = cache.get(`todo_detail_${listId}`);
        
        if (todos)
            return commit('addTodos', todos);
            
        let where = {
                "list":{
                    "__type":"Pointer",
                    "className":"todo_list",
                    "objectId": null
                    }
                };
        
        where.list.objectId = listId;
        
        let stringWhere = qs.stringify({"where": JSON.stringify(where)});
        let url = `/todos?${stringWhere}`
        apiClient.get(url)
        .then(({data}) => {
            commit('addTodos', data.results);
            cache.set(`todo_detail_${listId}`, data.results);
        })
        .catch((err)=>{
            console.log('errorRetrievingDetails', err);
        });

    },
    checkTodo({state, commit}, todo){
        Axios.put(url+`/${todo.id}`, {...todo.done})
        .then((response)=>{
            commit('editTodo', response.data)
        })
    },
    selectTodo({state, commit}, todo){

        commit('selectedTodo', todo);
    },
    editTitle({state, commit}, todo){
        console.log(todo);

        apiClient.put(`/todo_list/${todo.objectId}`, todo)
        .then((response) => {
            commit('editTitle', todo)
        })
        .catch(function(err){
            console.log(err)
            this.$message.error('Oops! something went wrong');
        })

    }
}
