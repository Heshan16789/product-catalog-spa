<template>
  <section class="w-full bg-[#ffffff] py-16 px-6">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-black">
        COFFEE GALLERY
      </h2>
    </div>

    <!-- Gallery Grid -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery1.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery2.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery3.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery4.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery5.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery6.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>
        
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery7.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>
      
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src="../assets/gallery8.jpg"
          alt="Coffee"
          class="w-full h-64 object-cover hover:scale-110 transition duration-300"
        />
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
};
</script>