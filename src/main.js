import Vue from 'vue';
import App from './App.vue';
import store from '@/app/store';
import router from '@/app/arch/router';
import './plugins/loading';
import './app/assets/style/global.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
