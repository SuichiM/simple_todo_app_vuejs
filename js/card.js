Vue.component('card', {
    props:['title', 'content'],
    data() {
      return {
        claps: 0
      }
    },
    template: `
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">
            {{title}}
          </h3>
          <div class="card-text">
            {{ content}}
          </div>
          <div class="text-center text-muted display-4">{{ claps }}</div>
          <button @click="clapArticle" class="btn btn-info btn-sm">Clap For Me</button>
          <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
        </div>
      </div>
    `,
    methods :{
      deleteArticle(){
        this.$emit('delete-article', this.title);
      },
      clapArticle() {
        this.claps++
      }
    }
    })
    