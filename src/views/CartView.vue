<template>
  <div>
    <h1>Mon panier</h1>
    <p v-if="cart.length === 0">Votre panier est vide</p>
    <div v-for="item in cart" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>Prix : {{ item.price }} €</p>
      <p>Quantité : {{ item.quantity }}</p>
      <button @click="remove(item.id)">Retirer</button>
    </div>
    <router-link to="/">Retour aux produits</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch("removeFromCart", id);
    },
  },
};
</script>
