<template>
  <div class="d-flex justify-content-center">
    <a-button
      @click="()=>$router.push('/todos')"
      type="primary"
      shape="circle"
      icon="arrow-left"
      class="mr-5"
      title="volver"
      ghost
    ></a-button>

    <div v-if="! editing" class="card-title">
      <p class="h3">
        {{title}}
        <a-button
          type="link"
          icon="edit"
          @click="()=> {this.editing=true; this.editingTitle=this.title;}"
        />
      </p>
    </div>
    <div v-else class="col-md-8 ant-col-offset-4 pb-2">
      <a-input size="large" v-model="editingTitle" @keyup.enter="editTitle" @keyup.27="cancelEdit" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      editing: false,
      editingTitle: ""
    };
  },
  computed: {
    ...mapState({
      id: state => state.todos.selectedTodo.objectId,
      title: state => state.todos.selectedTodo.name
    })
  },
  methods: {
    editTitle() {
      var list = {
        objectId: this.id,
        name: this.editingTitle
      };

      this.$store.dispatch("todos/editTitle", list);
      this.editing = false;
    },
    cancelEdit() {
      this.editing = false;
    }
  }
};
</script>