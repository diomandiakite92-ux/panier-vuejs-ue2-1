import Vue from "vue";
import Router from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Products", component: ProductsView },
    { path: "/cart", name: "Cart", component: CartView },
  ],
});
