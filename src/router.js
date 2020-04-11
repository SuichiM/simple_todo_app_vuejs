import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

import TodosRoutes from './views/todos/routes'
import UserRoutes from './views/users/routes'
import HomePage from './views/HomePage'

//import { nextTick } from 'q';


const router = new Router({
    mode: 'history',
    routes: [
        ...TodosRoutes,
        ...UserRoutes,
        {
          path: '/',
          component: HomePage,
          meta: { requiresAuth: true }
        },
        // default route is /
        { path: '*', redirect: '/' }
    ]
  })
  
  // check Auth
  router.beforeEach((to, from, next) => {
    if (! to.matched.some(record => record.meta.requiresAuth)) 
      return next()
    
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    if (! store.getters['user/isLoggedIn']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  
  })


  router.beforeEach((to, from, next) => {
    let app = to.path.split('/');
    
    if(app[1] === "")
        app[1] = 'home';

    store.dispatch('changeApp', app[1]);
    next();
  })

  export default router;