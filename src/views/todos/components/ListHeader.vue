<template>
<div>
    <router-link to="/todos" class="float-left px-5 align-self-center">
            <a-icon type="arrow-left"/>
            volver
    </router-link>

    <div v-if="! editing" class="card-title">

        <p class="h3"> 
            {{title}}   
            
            <a-button type="link"  
            icon="edit" 
            @click="()=> {this.editing=true; this.editingTitle=this.title;}"
            />             
        </p>
       
    </div>
    <div v-else class="col-md-8 ant-col-offset-4 pb-2">
        
        <a-input size="large" 
            v-model="editingTitle" 
            @keyup.enter="editTitle" 
            @keyup.27="cancelEdit"/>
    
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data:()=>{
        return {
        editing: false,
        editingTitle: ''
        }
    },
    computed:{
        ...mapState({
           id:     state => state.todos.selectedTodo.objectId,
           title : state => state.todos.selectedTodo.name
        })
    },
    methods:{
        editTitle(){
            var list = {
                objectId:    this.id,
                name: this.editingTitle 
            }

            this.$store.dispatch('todos/editTitle', list);
            this.editing = false;
        },
        cancelEdit(){
            this.editing = false;
        }
    }
}
</script>