<style scoped>
    .xsmall{
        font-size: .7rem
    }
</style>
<template>
<div>
    <h1>ToDo List</h1>
    <ul>
        <li class="row" v-for="(todoitem) in todoList" :key="todoitem.objectId">
            
            <div class="text-right col-6"> 
                <span >    {{ todoitem.name }} </span>
                <span class="text-muted xsmall">{{ new Date(todoitem.createdAt).toLocaleDateString() }}</span>
            </div>
            <a-button type="link" shape="circle" icon="eye" @click="handleClick(todoitem)"/>
        </li>
    </ul>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    mounted(){
        this.$store.dispatch('todos/getTodosList')
    },
    computed:{
        ...mapState({
           todoList: state => state.todos.listTodos
        })
    },
    methods:{
        handleClick(todoItem){
            
            this.$store.dispatch('todos/getTodosByListID', todoItem.objectId);
            this.$store.dispatch('todos/selectTodo', todoItem);
            this.$router.push(`todos/${todoItem.objectId}`);

        }
    }
}
</script>>