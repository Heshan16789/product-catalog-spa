<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Blog</li>
      <li>Shop</li>
      <li>Contact Us</li>
    </ul>

    <div class="hamburger" @click="toggleMenu">
      <div :class="{ 'bar1': true, 'change': isOpen }"></div>
      <div :class="{ 'bar2': true, 'change': isOpen }"></div>
      <div :class="{ 'bar3': true, 'change': isOpen }"></div>
    </div>

    <transition name="fade">
      <ul v-if="isOpen" class="mobile-menu">
        <li @click="toggleMenu">Home</li>
        <li @click="toggleMenu">About Us</li>
        <li @click="toggleMenu">Services</li>
        <li @click="toggleMenu">Blog</li>
        <li @click="toggleMenu">Shop</li>
        <li @click="toggleMenu">Contact Us</li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* 1. Navbar Container - Set to Transparent and Absolute */
.navbar {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  display: flex;
  justify-content: center; /* Centers links horizontally */
  align-items: center;
  padding: 30px 0;
  background: transparent; /* No color background */
  z-index: 1000;
}

/* 2. Desktop Links Styling */
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  color: white; /* White font color */
  font-family: 'Marko One', serif;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-links li:hover {
  color: #d4a373; /* Warm coffee gold hover */
  transform: translateY(-2px);
}

/* 3. Hamburger Styling */
.hamburger {
  display: none; /* Hidden on desktop */
  cursor: pointer;
  position: absolute;
  right: 30px;
  z-index: 1100;
}

.hamburger div {
  width: 28px;
  height: 3px;
  background: white; /* White bars for the hamburger */
  margin: 6px;
  transition: 0.4s;
  border-radius: 2px;
}

/* 4. Mobile Menu Styling */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(20, 15, 10, 0.95); /* Darker "espresso" background for readability */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  backdrop-filter: blur(8px); /* Modern frosted effect */
}

.mobile-menu li {
  color: white;
  font-family: 'Marko One', serif;
  font-size: 24px;
  cursor: pointer;
}

/* 5. Responsive Logic */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide desktop links on mobile */
  }

  .hamburger {
    display: block; /* Show hamburger on mobile */
  }
}

/* 6. Hamburger "X" Animation */
.change.bar1 {
  transform: rotate(-45deg) translate(-6px, 7px);
}
.change.bar2 {
  opacity: 0;
}
.change.bar3 {
  transform: rotate(45deg) translate(-6px, -7px);
}

/* Fade Transition for Menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>