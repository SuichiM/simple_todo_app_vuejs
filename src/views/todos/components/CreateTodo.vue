<template>
    <div class="container text-center col-md-6">
        <a-form-item help="Enter to save">
            <a-input v-model="todo" @keyup.enter="saveTodo" placeholder="Todo item ">
            </a-input>
        </a-form-item>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        computed:{
        ...mapState({
           list: state => state.todos.selectedTodo
        })
        },
        data: () => ({
            todo: ''
        }),

        methods: {
            saveTodo() {
                let new_todo = {todo : this.todo, list : this.list};
                this.$store.dispatch('todos/addTodo', new_todo);
                this.todo=''
            }
        }
    }
</script>
