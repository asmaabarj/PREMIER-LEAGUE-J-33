import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://api.sofascore.com/api/v1/';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
