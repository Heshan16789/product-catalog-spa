<template>
  <div class="main-layout">
    <!-- Hero Section -->
    <header class="hero">
      <img src="./assets/logo.png" alt="Logo" class="logo"/>
      <img src="./assets/second-logo.png" alt="Second Logo" class="floating-logo" />

      <h1 class="brand-text">COFFEE HEAVEN</h1>
      <p class="description-text">
        Crafting the perfect brew for your daily escape.
        Experience the rich aroma of hand-picked beans,
        roasted to perfection in every single cup.
      </p>

      <button class="btn-shop">SHOP HERE</button>

      <Navbar />
    </header>

    <!-- Main Content Area -->
    <main class="content-area">
      <OfferSection />

      <!-- Integrated Coffee Herald Section -->
      <section class="w-full bg-[#f2e8da] py-12 px-6">
        <div class="w-full flex justify-center pt-12">
          <span class="font-inter font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] text-black">
            THE COFFEE HERALD
          </span>
        </div>
        
        <div class="w-full flex justify-center pt-10 mb-12">
          <p class="text-[12px] sm:text-[14px] md:text-[18px] text-black text-center max-w-[600px] leading-relaxed">
            The Coffee Herald is a curated collection of fine beans and roasting traditions.
          </p>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Column 1: New Technology -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="./assets/img-1.jpg" alt="New Technology" class="w-full h-auto object-cover mb-6 shadow-sm" />
            <h3 class="font-inter font-bold text-lg mb-3 tracking-tight text-black">NEW TECHNOLOGY</h3>
            <p class="text-black text-sm leading-relaxed mb-4">
              Exploring the latest innovations in precision roasting and automated brewing to ensure every bean reaches its maximum flavor potential.
            </p>
            <a href="#" class="font-bold text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
              READ MORE >
            </a>
          </div>

          <!-- Column 2: Friendly Staff -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="./assets/img-2.jpg" alt="Friendly Staff" class="w-full h-auto object-cover mb-6 shadow-sm" />
            <h3 class="font-inter font-bold text-lg mb-3 tracking-tight text-black">FRIENDLY STAFF</h3>
            <p class="text-black text-sm leading-relaxed mb-4">
              Our expert baristas are dedicated to more than just making coffee; they are here to share the story behind every cup we serve.
            </p>
            <a href="#" class="font-bold text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
              READ MORE >
            </a>
          </div>

          <!-- Column 3: Delicious Coffees -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="./assets/img-3.jpg" alt="Delicious Coffees" class="w-full h-auto object-cover mb-6 shadow-sm" />
            <h3 class="font-inter font-bold text-lg mb-3 tracking-tight text-black">DELICIOUS COFFEES</h3>
            <p class="text-black text-sm leading-relaxed mb-4">
              Discover our seasonal blends and single-origin selections, hand-picked from the finest high-altitude plantations across the globe.
            </p>
            <a href="#" class="font-bold text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
              READ MORE >
            </a>
          </div>
        </div>
      </section>

      <!-- Banner Section (Screenshot 2026-05-14 154637.jpg & Screenshot 2026-05-14 154649.jpg) -->
      <section class="w-full">
        <img 
          src="./assets/banner-desktop.jpg" 
          alt="Coffee Banner Desktop" 
          class="hidden md:block w-full h-auto object-cover"
        />
        <img 
          src="./assets/banner-mobile.png" 
          alt="Coffee Banner Mobile" 
          class="block md:hidden w-full h-auto object-cover"
        />
      </section>

      <!-- NEW Stats/Blog Section (Screenshot 2026-05-14 165426.jpg & Screenshot 2026-05-14 165439.jpg) -->
      <StatsSection />

    </main>
  </div> 
</template>

<script>
import Navbar from "./components/Navbar.vue";
import OfferSection from "./components/OfferSection.vue";
// 1. Import the new component
import StatsSection from "./components/StatsSection.vue";

export default {
  components: {
    Navbar,
    OfferSection,
    // 2. Register the component
    StatsSection,
  },
};
</script>

<style>
/* 1. Global Resets */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* 2. Hero Section Adjustments */
.hero {
  width: 100%;
  /* Force a minimum height so the section exists in the document flow */
  height: 120vh; 
  background-image: url('./assets/hero.jpg');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  position: relative; /* This is the anchor for your absolute items */
}

/* 3. The "Content Area" Fix */
.content-area {
  position: relative;
  width: 100%;
  background-color: #ffffff; /* Ensures the hero image doesn't bleed through */
  z-index: 5; /* Keeps it above the hero background */
}

/* Desktop absolute positions */
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 240px;
  height: auto;
  z-index: 10;
}

.floating-logo {
  position: absolute;
  top: 43%;
  left: 73%;
  transform: translate(-50%, -50%);
  height: 125px;
}

.brand-text {
  font-family: 'Marko One';
  color: white;
  font-size: 36px;
  letter-spacing: 2px;
  position: absolute;
  top: 55%;
  left: 62%;
  transform: translateY(-50%);
}

.description-text {
  position: absolute;
  top: 64%;
  left: 73%;
  transform: translate(-50%, -50%);
  font-family: "Marko One", serif;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  width: 550px;
}

.btn-shop {
  position: absolute;
  top: 80%;
  left: 73%;
  transform: translate(-50%, -50%);
  width: 249px;
  height: 75px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background: transparent;
  font-family: "Marko One", serif;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
}

/* --- 4. Mobile Version Fixes --- */
@media (max-width: 768px) {
  .hero {
    height: 100vh; /* Adjust hero height for mobile screens */
    background-image: url('./assets/hero-mobile.jpg');
    background-position: center;
  }

  /* Center the absolute elements horizontally on mobile */
  .logo {
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
  }

  .floating-logo {
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
  }

  .brand-text {
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    width: 100%;
    text-align: center;
  }

  .description-text {
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    width: 290px;
    font-size: 13px;
  }

  .btn-shop {
    top: 88%;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 40px;
    font-size: 14px;
  }
}
</style>