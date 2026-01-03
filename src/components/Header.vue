<template>
  <header class="header">
    <h1>Shop FR</h1>
    <router-link to="/cart"> Panier ({{ totalItems }}) </router-link>
  </header>
</template>

<script>
export default {
  computed: {
    totalItems() {
      // Somme des quantités dans le panier
      return this.$store.getters.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
}

.header a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
