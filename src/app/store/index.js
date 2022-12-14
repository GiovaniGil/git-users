import Vue from 'vue';
import Vuex from 'vuex';

import userStore from '@/app/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userStore,
  },
});
