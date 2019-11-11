<template>
    <div class="container text-center col-md-6">
        <a-form-item help="Enter to save">
            <a-input v-model="todo" @keyup.enter="saveTodo" placeholder="Todo item ">
            </a-input>
        </a-form-item>
    </div>
</template>

<script>

    export default {
        data: () => ({
            todo: ''
        }),

        methods: {
            saveTodo() {
                this.$store.dispatch('todos/addTodo', {todo: this.todo});
                this.todo=''
            }
        }
    }
</script>
