<template>
    <div class="container-fluid">
      <ListHeader/>
      <div class="card text-center ">
          
          <div class="card-body">

            <CreateTodo />

            <ListTodos />


          </div>
          <div class="card-footer">
            <TodosCount />
          </div>
      </div>
    </div>
</template>
<script>

import { mapState } from 'vuex'
import ListHeader from './components/ListHeader.vue'
import ListTodos from './components/ListTodos.vue'
import CreateTodo from './components/CreateTodo.vue'
import TodosCount from './components/TodosCount.vue'

export default {
  components: {
      ListHeader,
      ListTodos,
      CreateTodo,
      TodosCount
  },
  computed:{ 
    ...mapState({
      todoDetails: state => state.todos.todoDetails
    })

  },
  mounted() {
      // this.$store.dispatch('todos/getTodos')
  }      
}
</script>
