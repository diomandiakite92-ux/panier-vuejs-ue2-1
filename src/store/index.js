import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const exist = state.cart.find((p) => p.id === item.id);
      if (exist) {
        exist.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter((p) => p.id !== id);
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({ commit }, id) {
      commit("REMOVE_FROM_CART", id);
    },
  },
  getters: {
    cart: (state) => state.cart,
  },
});
