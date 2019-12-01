export default {
    addTodoLists(state, payload) {
      
        state.listTodos = payload;

    },
    addTodo(state, payload) {
        state.todoDetails = payload
    },
    editTodo(state, todo={}){
      let idx = state.todos.findIndex( el => el.id === todo.id);
      state.todos[idx] = todo;
      
      state.todos = [
          ...state.todos
        ]
    },
    addTodos(state, payload = []) {
        state.todoDetails = payload
    },
    removeTodo(state, todo ={}){
        state.todos = state.todos.filter(el => el.id !== todo.id)
    },
    editTitle(state, todo){
        state.selectedTodo = todo
    },
    selectedTodo(state, todo){
        state.selectedTodo = todo
    }
}
