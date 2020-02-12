import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import TodosRoutes from './views/todos/routes'
//import { nextTick } from 'q';
import myStore from './store';

const router = new Router({
    mode: 'history',
    routes: [
        ...TodosRoutes
    ]
  })
  
  router.beforeEach((to, from, next) => {
    let app = to.path.split('/');
    
    if(app[1] === "")
        app[1] = 'home';

    myStore.dispatch('changeApp', app[1]);
    next();
  })

  export default router;