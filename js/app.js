  new Vue({
    el: '#app',
    data: {
      articles:[{
          title: 'Build fullstack applications with laravel and vuejs',
          content: 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 ',
        }, {
          title: 'Where does it come from?',
          content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo .'
        }, {
          title: '1914 translation by H. Rackham',
          content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.'
      }]
    },
    methods: {
      removeArticle(articleTitle) {
        this.articles = this.articles.filter(article => article.title !== articleTitle)
      }
  }
  })