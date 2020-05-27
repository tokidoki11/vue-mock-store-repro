import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    INCREMENT: state => {
      state.count++;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit("INCREMENT");
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
