<template>
  <div class="card" @click="$emit('select')">
    <img :src="image" class="product-img" alt="product image" />

    <div class="card-body">
      <h3>{{ title }}</h3>
      <p class="category">{{ category }}</p>
      <p class="price">LKR {{ price }}</p>

      <button @click.stop="addToCartDirect">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { cartState } from "../data/cartState";

const props = defineProps({
  id: [String, Number],
  image: String,
  title: String,
  price: [Number, String],
  category: String,
});

defineEmits(["select"]);

const addToCartDirect = () => {
  cartState.addItem({
    id: props.id || props.title,
    name: props.title,
    image: props.image,
    price: props.price,
    category: props.category,
  });
  window.dispatchEvent(new CustomEvent("open-auth-cart"));
};
</script>

<style scoped>
.card {
  width: 220px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-body h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.category {
  color: #777;
  font-size: 14px;
}

.price {
  color: #d97706;
  font-weight: bold;
  margin-top: 10px;
}

button {
  width: 100%;
  margin-top: 12px;
  padding: 10px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background: #333;
}
</style>