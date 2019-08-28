import Vuex from 'vuex';
import Vue from 'vue';
Vue.use (Vuex);

export default new Vuex.Store ({
  state: {
    totalPrice: 0,
    totalApple: 0,
    totalBanana: 0,
  },
  mutations: {
    increment (state, price) {
      if (price === 10) {
        state.totalApple += price;
      } else {
        state.totalBanana += price;
      }
      state.totalPrice = state.totalApple + state.totalBanana;
    },
    decrement (state, price) {
      console.log (state.totalApple);
      if (price === 10) {
        if (state.totalApple > 0) {
          state.totalApple -= price;
        }
      } else {
        if (state.totalBanana > 0) {
          state.totalBanana -= price;
        }
      }
      state.totalPrice = state.totalApple + state.totalBanana;
    },
  },
});
