<template>
  <div>
    <h1>Produits</h1>
    <div v-for="item in products" :key="item.id">
      <h3>{{ item.title }}</h3>
      <img :src="item.image" width="120" />
      <p>{{ item.price }} €</p>
      <button @click="addToCart(item)">Ajouter au panier</button>
    </div>
    <router-link to="/cart">Voir le panier</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { products: [] };
  },
  mounted() {
    this.axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;
      })
      .catch((err) => console.error(err));
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
      alert(item.title + " ajouté au panier");
    },
  },
};
</script>
