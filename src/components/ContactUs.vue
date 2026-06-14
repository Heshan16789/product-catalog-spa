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
          <span class="cursor-pointer hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg></span>
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