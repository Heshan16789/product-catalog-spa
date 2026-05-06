<template>
  <div class="card">
    <img :src="image" class="product-img" />

    <div class="card-body">
      <h3>{{ title }}</h3>
      <p class="price">${{ price }}</p>
      <button>Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'price']
}
</script>

<style scoped>
.card {
  width: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: white;
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 12px;
}

.price {
  color: #ff4d4f;
  font-weight: bold;
}

button {
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
}
</style>