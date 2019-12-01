import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import store from './store'
import router from './router'
import cache from './cache';

Vue.config.productionTip = false

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

const apiClient = Axios.create({
  baseURL: 'https://parseapi.back4app.com/classes/',
  timeout: 10000,
  headers: {
    'X-Parse-Application-Id': 'tpRhULHRUJS4Veh53XKFkHiwWzzSqY1732zcw9uR',
    'X-Parse-Master-Key': 'MzJrT4pDEsLgTeoGUJGaW9ABe6MX2ux6DF9OzLvX'
  }
});
global.apiClient = apiClient;

global.cache = cache;

const qs = require('qs'); 
global.qs = qs;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
