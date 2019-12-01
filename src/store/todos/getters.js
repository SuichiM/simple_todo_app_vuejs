export default {
    todosCount(state) {
        return Object.values(state.todoDetails).length || 0;
    },
    doneTodos(state){
        return Object.values(state.todoDetails).filter(todo => todo.done ).length || 0
    },
    undoneTodos(state){
        return Object.values(state.todoDetails).filter(todo => ! todo.done ).length || 0;
    }
}
