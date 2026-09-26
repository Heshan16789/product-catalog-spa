<template>
  <section
    class="relative w-full text-white bg-cover bg-center"
    :style="{ backgroundImage: `url('/src/assets/footer-bg.jpg')` }"
  >
    <div class="flex justify-center pt-10">
        <img
            src="../assets/footer-logo.png"
            alt="Logo"
            class="w-64 md:w-48 object-contain"
        />
    </div>
    

    <!-- Content -->
    <div class="relative max-w-5xl mx-auto text-center py-20 px-6">

      <!-- Description -->
      <p class="text-sm md:text-base max-w-2xl mx-auto mb-10 text-gray-200">
        Have questions or feedback? Visit our coffee shop or contact us anytime <br>
        we’re here to brew the perfect experience for you
      </p>

      <!-- Info Sections -->
      <div class="space-y-8">

        <div>
          <h3 class="font-bold tracking-widest mb-2">WORKING HOURS</h3>
          <p class="text-gray-300 text-sm">
            MONDAY TO SATURDAY 9:00 AM TO 8:00 PM
          </p>
        </div>

        <div>
          <h3 class="font-bold tracking-widest mb-2">ADDRESS</h3>
          <p class="text-gray-300 text-sm">
            215, PARK AVENUE, COLOMBO 03
          </p>
        </div>

        <div>
          <h3 class="font-bold tracking-widest mb-2">CONTACT US</h3>
          <p class="text-gray-300 text-sm">
            +94 783399996
          </p>
        </div>

      </div>
    </div>

    <!-- Footer Bar -->
    <div class="relative border-t border-gray-600">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 text-sm text-gray-300">

        <!-- Left -->
        <p>© 2026 Ambitious Developer, All Rights Reserved</p>

        <p>Follow Us on</p>

        <!-- Right Social Icons -->
        <div class="flex gap-4 mt-3 md:mt-0">
          <span class="cursor-pointer hover:text-white">🌐</span>
          <span class="cursor-pointer hover:text-white">📘</span>
          <span class="cursor-pointer hover:text-white">🐦</span>
          <span class="cursor-pointer hover:text-white">💼</span>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>