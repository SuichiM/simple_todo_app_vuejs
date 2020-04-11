export default {
    getTodosList({state, commit}){
        let list = cache.getItem('todo_list');
        
        if (list)
            return commit('addTodoLists', list);

        apiClient.get('/todo_list')
        .then(function ({data}) {
            commit('addTodoLists', data.results);
            cache.setItem('todo_list', data.results);
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
                            "objectId": payload['list'].objectId }; 

        apiClient.post('/todos', payload)
            .then((response) => {
                commit('addTodo', Object.assign({}, response.data, payload))
            })
    },
    editTodo({state, commit}, todo){

        apiClient.put(`/todos/${todo.objectId}`, todo)
        .then((response) => {
            commit('editTodo', todo)
        })
        .catch(function(err){
            console.log(err)
            this.$message.error('Oops! something went wrong');
        })

    },
    deleteTodo({state, commit}, data){
        apiClient.delete(`/todos/${data.objectId}`)
        .then((response) => {
            commit('removeTodo', data)
        })
        .catch(function(err){
            console.log(err)
            this.$message.error('Oops! something went wrong');
        })

    },
    getTodos({ commit }) {
        Axios.get(url).then(response => {
            commit('addTodos', response.data)
        })
    },
    getTodosByListID({commit}, listId){

        let todos = cache.getItem(`todo_detail_${listId}`);
        
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
            cache.setItem(`todo_detail_${listId}`, data.results);
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
