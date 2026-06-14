<template>
  <section class="bg-white py-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-12">
        OUR PARTNERS
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        <div v-for="(logo, i) in logos" :key="i" class="flex justify-center">
          <img
            :src="logo"
            class="h-16 md:h-20 object-contain"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

export default {
  data() {
    return {
      logos: [logo1, logo2, logo3, logo4, logo5],
    };
  },
};
</script>