<template>
    <ul>
        <li class="row" v-for="(todoitem) in todos" :key="todoitem.id">
            <div class="text-right col-6"> 
                <span  v-if="todoitem.id !== editing" >    {{ todoitem.todo }} </span>
                <a-input v-else type="text" v-model="editingValue" @keyup.enter="modifyTodo" />    
            </div>
            <div class="col-6 text-center">
                    
                    <input class="btn btn-sm " type="button" value="editar" @click="editTodo(todoitem)"/> 
                    
                    <input class="btn btn-sm btn-danger " type="button" value="borrar" @click="deleteTodo(todoitem)"/>
            </div>
        </li>
    </ul>
</template>


<script>
    export default {
        data:()=>{
            return {
               editingValue:'', 
               editing: null  
            }
        },
        computed: {
            todos() {
                return this.$store.state.todos.todos
            }
        },
        methods:{
            editTodo(todo){
                this.editing = todo.id;
                this.editingValue = todo.todo;
             },
            deleteTodo(todo){
                const store = this.$store;
                this.$confirm({
                    title: 'Esta seguro que desea eliminar este TODO?',
                    okText: 'ELIMINAR',
                    okType: 'danger',
                    cancelText: 'CANCELAR',
                    onOk() {
                        store.dispatch('todos/deleteTodo', todo)
                    },
                    onCancel() { },
                });
            },
            modifyTodo(){
                let todo = {
                    id      : this.editing,
                    todo    : this.editingValue
                };

                this.$store.dispatch('todos/editTodo', todo);

                this.editing = null;
                this.editingValue = null;
            }
        }
    }
</script>
