Vue.component('card', {
  props:['title', 'content'],
    template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{title ||  'Vuejs fundamentals'}}
        </h3>
        <div class="card-text">
          {{ content || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores, sunt facilis omnis ipsum hic, temporibus commodi eius animi atque culpa iste molestias quaerat ipsa! Dolores dolore voluptas labore cum!' }}
        </div>
      </div>
    </div>
    `
  })
  
  new Vue({
    el: '#app'
  })