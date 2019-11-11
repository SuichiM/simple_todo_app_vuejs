<template>
    <div v-if="! editing">
        <h3 class="card-title" > {{title}}  <a-button type="link"  icon="edit" @click="()=> {this.editing=true; this.editingTitle=this.title;}"/> </h3>
       
    </div>
    <a-input v-else size="large" v-model="editingTitle" @keyup.enter="editTitle" @keyup.27="cancelEdit"/>

</template>
<script>
export default {
    data:()=>{
        return {
        editing: false,
        editingTitle: ''
        }
    },
    computed:{
            title() {
                return this.$store.state.todos.title
            }
    },
    methods:{
        editTitle(){
            this.$store.dispatch('todos/editTitle', this.editingTitle);
            this.editing = false;
        },
        cancelEdit(){
            this.editing = false;
        }
    }
}
</script>