<template>
    <h3>
        All TODOs: {{ todoCount }}
        <small class="text-success"> Done!      <a-badge :count="ready" :numberStyle="{backgroundColor: '#52c41a'} "/> </small> 
        <small class="text-danger"> Not ready!  <a-badge :count="uncomplete"  /> </small> 
    </h3>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            todoCount : 'todos/todosCount',
            ready: 'todos/doneTodos',
            uncomplete: 'todos/undoneTodos'
        })
    }
}
</script>
