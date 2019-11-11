export default {
    addTodo(state, payload) {
        state.todos = [
            ...state.todos,
            payload
        ]
    },
    editTodo(state, todo={}){
      let idx = state.todos.findIndex( el => el.id === todo.id);
      state.todos[idx] = todo;
      
      state.todos = [
          ...state.todos
        ]
    },
    addTodos(state, payload = []) {
        state.todos = [
            ...state.todos,
            ...payload
        ]
    },
    removeTodo(state, todo ={}){
        state.todos = state.todos.filter(el => el.id !== todo.id)
    },
    editTitle(state, title){
        state.title = title
    }
}
