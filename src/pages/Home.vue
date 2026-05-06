<template>
  <div>
    <Navbar />

    <section class="hero">
      <h1>New Collection</h1>
      <p>Discover modern styles</p>
      <button>Shop Now</button>
    </section>

    <section class="products">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :image="p.image"
        :title="p.title"
        :price="p.price"
      />
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { Navbar, ProductCard },
  data() {
    return {
      products: [
        { id: 1, title: 'Shoes', price: 120, image: 'https://via.placeholder.com/200' },
        { id: 2, title: 'Bag', price: 90, image: 'https://via.placeholder.com/200' }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 60px 20px;
  background: #f5f5f5;
}

.products {
  display: flex;
  gap: 20px;
  padding: 40px;
  flex-wrap: wrap;
}
</style>