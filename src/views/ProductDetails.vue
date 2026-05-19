<script setup>
import { useRoute } from "vue-router"
import { products } from "@/data/products"

const route = useRoute()

const product = products.find(
  (p) => p.id == route.params.id
)
</script>

<template>
  <div class="details-page" v-if="product">

    <div class="left">
      <img :src="product.image" />
    </div>

    <div class="right">
      <h1>{{ product.name }}</h1>

      <p class="rating">⭐⭐⭐⭐⭐ {{ product.rating }}</p>

      <h2>LKR {{ product.price }}</h2>

      <p class="old-price">
        LKR {{ product.oldPrice }}
      </p>

      <p class="description">
        {{ product.description }}
      </p>

      <p><strong>Brand:</strong> {{ product.brand }}</p>

      <p><strong>Stock:</strong> {{ product.stock }}</p>

      <div class="buttons">
        <button class="buy">Buy Now</button>
        <button class="cart">Add To Cart</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.details-page {
  display: flex;
  gap: 60px;
  padding: 60px;
}

.left img {
  width: 350px;
}

.right {
  max-width: 500px;
}

.rating {
  color: gold;
}

.old-price {
  text-decoration: line-through;
  color: gray;
}

.description {
  margin: 20px 0;
  line-height: 1.6;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.buy {
  background: #3b82f6;
  color: white;
}

.cart {
  background: #d97706;
  color: white;
}

button {
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  cursor: pointer;
}
</style>