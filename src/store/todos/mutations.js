export default {
    addTodoLists(state, payload) {
      
        state.listTodos = payload;

    },
    addTodo(state, payload) {
        state.todoDetails = [state.todoDetails,
                             payload]
    },
    editTodo(state, todo={}){
      let idx = Object.values(state.todoDetails).findIndex( el => el.objectId === todo.objectId);
      state.todoDetails[idx] = Object.assign(state.todoDetails[idx], todo);
      
      state.todoDetails = state.todoDetails;
        
    },
    addTodos(state, payload = []) {
        state.todoDetails = payload
    },
    removeTodo(state, todo ={}){
        state.todos = Object.values(state.todoDetails).filter(el => el.objectId !== todo.objectId)
    },
    editTitle(state, todo){
        state.selectedTodo = todo
    },
    selectedTodo(state, todo){
        state.selectedTodo = todo
    }
}
