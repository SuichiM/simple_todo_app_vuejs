import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import TodosRoutes from './views/todos/routes'

const router = new Router({
    mode: 'history',
    routes: [
        ...TodosRoutes
    ]
  })
  
  export default router;