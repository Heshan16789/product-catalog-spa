<template>
  <nav class="navbar">
    <!-- Desktop Center Nav Links -->
    <ul class="nav-links">
      <li @click="scrollToSection('hero')">Home</li>
      <li @click="scrollToSection('about-us')">About Us</li>
      <li @click="scrollToSection('services')">Services</li>
      <li @click="scrollToSection('blog')">Blog</li>
      <li @click="scrollToSection('product-section')">Shop</li>
      <li @click="scrollToSection('contact-us')">Contact Us</li>
    </ul>

    <!-- Top-Right Actions: Cart & Auth -->
    <div class="auth-buttons">
      <!-- Shopping Cart Icon -->
      <button class="cart-btn" @click="openAuthModal('login')" title="View Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span v-if="cartState.totalCount > 0" class="cart-badge">
          {{ cartState.totalCount }}
        </span>
      </button>

      <button class="btn-login" @click="openAuthModal('login')">Log In</button>
      <button class="btn-signup" @click="openAuthModal('signup')">Sign Up</button>
    </div>

    <!-- Hamburger Toggle -->
    <div class="hamburger" @click="toggleMenu">
      <div :class="{ 'bar1': true, 'change': isOpen }"></div>
      <div :class="{ 'bar2': true, 'change': isOpen }"></div>
      <div :class="{ 'bar3': true, 'change': isOpen }"></div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition name="fade">
      <ul v-if="isOpen" class="mobile-menu">
        <li @click="navigateMobile('hero')">Home</li>
        <li @click="navigateMobile('about-us')">About Us</li>
        <li @click="navigateMobile('services')">Services</li>
        <li @click="navigateMobile('blog')">Blog</li>
        <li @click="navigateMobile('product-section')">Shop</li>
        <li @click="navigateMobile('contact-us')">Contact Us</li>

        <div class="mobile-auth">
          <button class="cart-btn" @click="openAuthModal('login')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartState.totalCount > 0" class="cart-badge">{{ cartState.totalCount }}</span>
          </button>
          <button class="btn-login" @click="openAuthModal('login')">Log In</button>
          <button class="btn-signup" @click="openAuthModal('signup')">Sign Up</button>
        </div>
      </ul>
    </transition>

    <!-- Modal Popup -->
    <AuthModal 
      v-if="showModal" 
      :initialMode="modalMode" 
      @close="showModal = false" 
    />
  </nav>
</template>

<script>
import AuthModal from "./AuthModal.vue";
import { cartState } from "../data/cartState";

export default {
  components: {
    AuthModal,
  },
  data() {
    return {
      cartState,
      isOpen: false,
      showModal: false,
      modalMode: "login",
    };
  },
  mounted() {
    // Listen for custom Add to Cart events from anywhere in the app
    window.addEventListener("open-auth-cart", () => {
      this.openAuthModal("login");
    });
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    scrollToSection(sectionId) {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    navigateMobile(sectionId) {
      this.toggleMenu();
      this.scrollToSection(sectionId);
    },
    openAuthModal(mode) {
      this.modalMode = mode;
      this.showModal = true;
      if (this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  background: transparent;
  z-index: 1000;
}

.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  color: white;
  font-family: "Marko One", serif;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-links li:hover {
  color: #d4a373;
  transform: translateY(-2px);
}

.auth-buttons {
  position: absolute;
  right: 40px;
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Cart Icon Button */
.cart-btn {
  background: transparent;
  border: none;
  color: #ffffff;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px;
  transition: color 0.2s ease;
}

.cart-btn:hover {
  color: #d4a373;
}

.cart-badge {
  position: absolute;
  top: -2px;
  right: -4px;
  background: #e11d48;
  color: white;
  font-size: 11px;
  font-weight: 800;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-login {
  background: transparent;
  color: #ffffff;
  border: 1px solid transparent;
  padding: 8px 16px;
  font-family: "Marko One", serif;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-login:hover {
  color: #d4a373;
}

.btn-signup {
  background: #d4a373;
  color: #1a1614;
  border: 1px solid #d4a373;
  padding: 8px 18px;
  font-family: "Marko One", serif;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-signup:hover {
  background: transparent;
  color: #ffffff;
  border-color: #ffffff;
}

.hamburger {
  display: none;
  cursor: pointer;
  position: absolute;
  right: 25px;
  z-index: 1100;
}

.hamburger div {
  width: 28px;
  height: 3px;
  background: white;
  margin: 6px;
  transition: 0.4s;
  border-radius: 2px;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(20, 15, 10, 0.95);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
  backdrop-filter: blur(8px);
}

.mobile-menu li {
  color: white;
  font-family: "Marko One", serif;
  font-size: 24px;
  cursor: pointer;
}

.mobile-auth {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
}

@media (max-width: 992px) {
  .nav-links,
  .auth-buttons {
    display: none;
  }
  .hamburger {
    display: block;
  }
}

.change.bar1 { transform: rotate(-45deg) translate(-6px, 7px); }
.change.bar2 { opacity: 0; }
.change.bar3 { transform: rotate(45deg) translate(-6px, -7px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>