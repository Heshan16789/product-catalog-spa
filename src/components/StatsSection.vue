<template>
  <section class="w-full bg-white py-16 px-6 stats-font">
    <!-- Responsive Grid: 2 columns on mobile, 4 on desktop -->
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
      
      <!-- Stat 1 -->
      <div class="flex flex-col items-center text-center">
        <span class="text-[#c49b48] font-bold text-3xl md:text-4xl mb-2">250</span>
        <h4 class="font-bold text-lg md:text-xl text-black mb-2 uppercase">Variety of Coffee</h4>
        <p class="text-black text-[10px] md:text-xs max-w-[180px] leading-relaxed">
          A diverse selection of signature blends from the world's plantations.
        </p>
      </div>

      <!-- Stat 2 -->
      <div class="flex flex-col items-center text-center">
        <span class="text-[#c49b48] font-bold text-3xl md:text-4xl mb-2">144</span>
        <h4 class="font-bold text-lg md:text-xl text-black mb-2 uppercase">Hours of Testing</h4>
        <p class="text-black text-[10px] md:text-xs max-w-[180px] leading-relaxed">
          Every batch undergoes rigorous quality control for the perfect roast.
        </p>
      </div>

      <!-- Stat 3 -->
      <div class="flex flex-col items-center text-center">
        <span class="text-[#c49b48] font-bold text-3xl md:text-4xl mb-2">750</span>
        <h4 class="font-bold text-lg md:text-xl text-black mb-2 uppercase">Coffee Markets</h4>
        <p class="text-black text-[10px] md:text-xs max-w-[180px] leading-relaxed">
          Successfully delivering premium coffee experiences across all global trade networks.
        </p>
      </div>

      <!-- Stat 4 -->
      <div class="flex flex-col items-center text-center">
        <span class="text-[#c49b48] font-bold text-3xl md:text-4xl mb-2">587</span>
        <h4 class="font-bold text-lg md:text-xl text-black mb-2 uppercase">Coffee Lovers</h4>
        <p class="text-black text-[10px] md:text-xs max-w-[180px] leading-relaxed">
          A growing community of enthusiasts who love our premium brewing.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection'
}
</script>

<style scoped>
/* Applying Marko One to the entire section */
.stats-font {
  font-family: 'Marko One', serif;
}
</style>