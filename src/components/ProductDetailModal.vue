<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      <button class="close-btn" @click="$emit('close')">&times;</button>

      <div class="modal-content">
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name || product.title" />
        </div>

        <div class="details">
          <span class="category-badge">{{ product.category }}</span>
          <h2>{{ product.name || product.title }}</h2>
          <p class="price">LKR {{ product.price }}</p>
          <p class="desc">
            {{ product.description || 'Crafted with premium selected beans, slow-roasted to bring out authentic rich aromas and rich taste in every brew.' }}
          </p>

          <div class="btn-group">
            <button class="btn-cart" @click="handleAddToCart">Add to Cart</button>
            <button class="btn-buy" @click="handleBuyNow">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cartState } from "../data/cartState";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "added-to-cart"]);

const handleAddToCart = () => {
  cartState.addItem(props.product);
  emit("close");
  // Emits to notify parent to trigger login with cart preview
  emit("added-to-cart", props.product);
  window.dispatchEvent(new CustomEvent("open-auth-cart"));
};

const handleBuyNow = () => {
  cartState.addItem(props.product);
  emit("close");
  window.dispatchEvent(new CustomEvent("open-auth-cart"));
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
  padding: 16px;
}

.modal-card {
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 680px;
  padding: 35px;
  position: relative;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 18px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal-content {
  display: flex;
  gap: 24px;
  align-items: center;
}

.image-wrapper {
  flex: 1;
  background: #fdfbf8;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
}

.image-wrapper img {
  width: 100%;
  max-height: 240px;
  object-fit: contain;
}

.details {
  flex: 1.2;
}

.category-badge {
  display: inline-block;
  background: #f2e8da;
  color: #8c5b32;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.details h2 {
  font-size: 22px;
  margin: 0 0 8px 0;
  color: #111;
}

.details .price {
  color: #b85d19;
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.details .desc {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin: 0 0 20px 0;
}

.btn-group {
  display: flex;
  gap: 12px;
}

.btn-cart {
  flex: 1;
  background: #111;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.btn-buy {
  flex: 1;
  background: #c36b2f;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 620px) {
  .modal-content {
    flex-direction: column;
  }
}
</style>