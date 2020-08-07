import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import { formatDate } from '@/utils/filters.js';

// 이런식으로 전역 컴포넌트로 사용해 주는게 용이 하다.
Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
