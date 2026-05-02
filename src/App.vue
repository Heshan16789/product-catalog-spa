<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <!-- These links allow navigation without reloading the page -->
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/product/1">Example Product</RouterLink>
    </nav>
  </header>

  <main>
    <!-- This is the 'Window' where Home.vue or ProductDetail.vue will appear -->
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}
</style>
