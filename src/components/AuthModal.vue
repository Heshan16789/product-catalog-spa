<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      
      <!-- Close Button -->
      <button class="close-btn" @click="$emit('close')">&times;</button>

      <!-- Cart Item Summary Banner (Shows if items exist) -->
      <div v-if="cartState.items.length > 0" class="cart-summary-box">
        <div class="cart-summary-header">
          <span>Items in Your Cart ({{ cartState.totalCount }})</span>
          <strong>LKR {{ cartState.totalPrice }}</strong>
        </div>
        <div class="cart-items-scroll">
          <div v-for="item in cartState.items" :key="item.id" class="cart-mini-item">
            <img :src="item.image" :alt="item.name" />
            <div class="cart-mini-info">
              <span class="mini-name">{{ item.name || item.title }}</span>
              <span class="mini-qty">Qty: {{ item.quantity }} × LKR {{ item.price }}</span>
            </div>
            <button class="btn-remove" @click="cartState.removeItem(item.id)">&times;</button>
          </div>
        </div>
        <p class="login-notice">Log in to save your order & proceed to checkout</p>
      </div>

      <!-- Top Tabs -->
      <div class="modal-header">
        <div class="tab-group">
          <span 
            :class="['tab-item', { active: activeTab === 'password' }]"
            @click="activeTab = 'password'"
          >
            Password
          </span>
          <span class="tab-divider">|</span>
          <span 
            :class="['tab-item', { active: activeTab === 'phone' }]"
            @click="activeTab = 'phone'"
          >
            Phone Number
          </span>
        </div>
      </div>

      <!-- Inputs -->
      <form class="modal-form" @submit.prevent="handleSubmit">
        <div class="input-wrapper">
          <input 
            type="text" 
            placeholder="Please enter your Phone or Email" 
            v-model="identifier"
            required
          />
        </div>

        <div class="input-wrapper">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            placeholder="Please enter your password" 
            v-model="password"
            required
          />
          <button 
            type="button" 
            class="eye-btn" 
            @click="showPassword = !showPassword"
          >
            <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
            </svg>
          </button>
        </div>

        <div class="forgot-wrapper">
          <a href="#" class="forgot-link">Forgot password?</a>
        </div>

        <button type="submit" class="submit-btn">
          {{ isSignUpMode ? 'SIGN UP & CHECKOUT' : 'LOGIN & CHECKOUT' }}
        </button>
      </form>

      <p class="switch-mode">
        <span v-if="!isSignUpMode">
          Don't have an account? <a href="#" @click.prevent="isSignUpMode = true">Sign up</a>
        </span>
        <span v-else>
          Already have an account? <a href="#" @click.prevent="isSignUpMode = false">Log in</a>
        </span>
      </p>

      <div class="social-section">
        <span class="social-title">Or, login with</span>
        <div class="social-buttons">
          <button type="button" class="social-btn">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18"/>
            Google
          </button>
          <button type="button" class="social-btn facebook">
            <svg width="18" height="18" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { cartState } from "../data/cartState";

export default {
  name: "AuthModal",
  props: {
    initialMode: {
      type: String,
      default: "login",
    },
  },
  data() {
    return {
      cartState,
      activeTab: "password",
      identifier: "",
      password: "",
      showPassword: false,
      isSignUpMode: this.initialMode === "signup",
    };
  },
  methods: {
    handleSubmit() {
      alert(`Success! Logged in as ${this.identifier}. Items preserved in cart: ${this.cartState.totalCount}`);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  padding: 15px;
}

.modal-card {
  background: #ffffff;
  width: 90%;
  max-width: 440px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  padding: 28px 30px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 18px;
  background: none;
  border: none;
  font-size: 26px;
  color: #8c8c8c;
  cursor: pointer;
  line-height: 1;
}

/* Mini Cart Box */
.cart-summary-box {
  background: #fdf8f4;
  border: 1px solid #fed7aa;
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 20px;
}

.cart-summary-header {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #8c5b32;
  font-weight: 600;
  margin-bottom: 8px;
}

.cart-items-scroll {
  max-height: 120px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cart-mini-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #f1f1f1;
}

.cart-mini-item img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
}

.cart-mini-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.mini-name {
  font-size: 12px;
  font-weight: 600;
  color: #333;
}

.mini-qty {
  font-size: 11px;
  color: #777;
}

.btn-remove {
  background: none;
  border: none;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
}

.btn-remove:hover {
  color: #e11d48;
}

.login-notice {
  font-size: 11px;
  color: #b45309;
  text-align: center;
  margin: 8px 0 0 0;
  font-weight: 500;
}

/* Header & Inputs */
.modal-header {
  display: flex;
  margin-bottom: 20px;
}

.tab-group {
  display: flex;
  gap: 16px;
  align-items: center;
}

.tab-item {
  font-size: 16px;
  font-weight: 600;
  color: #8c8c8c;
  cursor: pointer;
}

.tab-item.active {
  color: #2b2b2b;
}

.tab-divider {
  color: #d1d5db;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

.input-wrapper input:focus {
  border-color: #d87032;
}

.eye-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: #71717a;
}

.forgot-wrapper {
  display: flex;
  justify-content: flex-end;
}

.forgot-link {
  font-size: 12px;
  color: #71717a;
  text-decoration: none;
}

.submit-btn {
  width: 100%;
  padding: 13px 0;
  background: #d87032;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.submit-btn:hover {
  background: #be5f27;
}

.switch-mode {
  text-align: center;
  font-size: 12px;
  color: #71717a;
  margin: 16px 0;
}

.switch-mode a {
  color: #3b82f6;
  text-decoration: none;
}

.social-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.social-title {
  font-size: 12px;
  color: #8c8c8c;
}

.social-buttons {
  display: flex;
  gap: 20px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 13px;
  color: #4b5563;
  cursor: pointer;
}
</style>