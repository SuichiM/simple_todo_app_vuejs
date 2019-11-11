<template>
    <h3>
            <a-badge :count="todoCount" :numberStyle="{backgroundColor: '#999', color: '#fff'}" class="mx-2"> 
                <a-tag color="blue">Total TODOS</a-tag>
            </a-badge>

            <a-badge :count="ready" :numberStyle="{backgroundColor: '#52c41a'} "  class="mx-2"> 
                <a-tag color="green">Done</a-tag>
            </a-badge>

            <a-badge :count="uncomplete"  class="mx-2">
                <a-tag color="red"> Not ready!</a-tag>
            </a-badge>  
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
