import Vuex from 'vuex';
import Vue from 'vue';
Vue.use (Vuex);

export default new Vuex.Store ({
  state: {
    totalPrice: 0,
  },
  mutations: {
    increment (state, price) {
      state.totalPrice += price;
    },
    decrement (state, price) {
      state.totalPrice -= price;
    },
  },
});
