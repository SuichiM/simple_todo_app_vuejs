
<template>
  <div id="app" class="container-fluid">
        
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
import ListHeader from './components/ListHeader.vue'
import ListTodos from './components/ListTodos.vue'
import CreateTodo from './components/CreateTodo.vue'
import TodosCount from './components/TodosCount.vue'

export default {
  name: 'app',
  components: {
      ListHeader,
      ListTodos,
      CreateTodo,
      TodosCount
  },
  mounted() {
      this.$store.dispatch('todos/getTodos')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
    border: 2px solid black;
    padding: 20px;
    font-size: 22px;
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    font-size: 26px;
}
</style>
