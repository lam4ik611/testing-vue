import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import router from './router';
import Vuelidate from 'vuelidate';
import App from './App.vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//import './assets/css/index.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  VueRouter,
  router,
  render: h => h(App),
}).$mount('#app');
