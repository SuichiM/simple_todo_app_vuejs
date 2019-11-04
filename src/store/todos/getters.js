export default {
    todosCount(state) {
        return state.todos.length
    },
    doneTodos(state){
        return state.todos.filter(todo => todo.done ).length
    },
    undoneTodos(state){
        return state.todos.filter(todo => ! todo.done ).length
    }
}
