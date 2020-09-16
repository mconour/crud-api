/* eslint-disable import/first */
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import 'bulma/css/bulma.css';

Vue.use(VueCompositionAPI);

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
