<style scoped>
    .xsmall{
        font-size: .7rem
    }
</style>
<template>
    <ul>
        <li class="row" v-for="(todoitem) in todos" :key="todoitem.objectId">
            
            <div class="text-right col-6"> 
                <span  v-if="todoitem.objectId !== editing" >    {{ todoitem.todo }} </span>
                <a-input v-else class="col-10 mr-1" type="text" v-model="editingValue" @keyup.enter="modifyTodo" />    

                <span class="text-muted xsmall">{{ new Date(todoitem.createdAt).toLocaleDateString() }}</span>
            </div>
            <div class="col-2">
                <a-switch @change="markDone" :id="todoitem.objectId" :checked="todoitem.done">
                    <a-icon type="check" slot="checkedChildren" />
                    <a-icon type="close" slot="unCheckedChildren" />
                </a-switch>
            </div>
            <div class="col-2 text-center">
                    
                    <input class="btn btn-sm " type="button" value="editar" @click="editTodo(todoitem)"/> 
                    
                    <input class="btn btn-sm btn-danger " type="button" value="borrar" @click="deleteTodo(todoitem)"/>
            </div>
        </li>
    </ul>
</template>


<script>

import { mapState } from 'vuex'
    export default {
        data:()=>{
            return {
               editingValue:'', 
               editing: null  
            }
        },
        computed:{ 
            ...mapState({
                todos: state => state.todos.todoDetails
            })
        },
        methods:{
            editTodo(todo){
                this.editing = todo.objectId;
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
                    objectId : this.editing,
                    todo     : this.editingValue
                };

                this.$store.dispatch('todos/editTodo', todo);

                this.editing = null;
                this.editingValue = null;
            },
            markDone(checked, event){
                let mark = {objectId: event.srcElement.id, done: checked};
                this.$store.dispatch('todos/editTodo', mark);
            }
        }
    }
</script>
