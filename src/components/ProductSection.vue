<template>
  <section id="product-section" class="shop-section">

    <!-- Title -->
    <div class="title-area">
      <h1>
        OUR ONLINE COFFEE SHOP
      </h1>
      <p>
        Discover premium roasted coffee crafted for every coffee lover.
      </p>
    </div>

    <!-- Search -->
    <div class="filter-section">
      <input
        v-model="search"
        type="text"
        placeholder="Search coffee..."
        class="search-input"
      />

      <div class="categories">
        <button
          :class="{ active: selectedCategory === 'All' }"
          @click="selectedCategory = 'All'"
        >
          All
        </button>

        <button
          :class="{ active: selectedCategory === 'Espresso' }"
          @click="selectedCategory = 'Espresso'"
        >
          Espresso
        </button>

        <button
          :class="{ active: selectedCategory === 'Latte' }"
          @click="selectedCategory = 'Latte'"
        >
          Latte
        </button>

        <button
          :class="{ active: selectedCategory === 'Cold Brew' }"
          @click="selectedCategory = 'Cold Brew'"
        >
          Cold Brew
        </button>

        <button
          :class="{ active: selectedCategory === 'Premium' }"
          @click="selectedCategory = 'Premium'"
        >
          Premium
        </button>

        <button
          :class="{ active: selectedCategory === 'Cappuccino' }"
          @click="selectedCategory = 'Cappuccino'"
        >
          Cappuccino
        </button>

        <button
          :class="{ active: selectedCategory === 'Mocha' }"
          @click="selectedCategory = 'Mocha'"
        >
          Mocha
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="status-msg">
      Loading products...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="status-msg">
      Failed to load products.
    </div>

    <!-- Products -->
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :image="product.image"
        :title="product.name"
        :price="product.price"
        :category="product.category"
        @select="selectedProduct = product"
      />
    </div>

    <!-- Single Reusable Product Detail Modal -->
    <ProductDetailModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />

  </section>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { products as localProductData } from "../data/product";
import ProductCard from "./ProductCard.vue";
import ProductDetailModal from "./ProductDetailModal.vue";

const search = ref("");
const selectedCategory = ref("All");
const loading = ref(true);
const error = ref(false);
const products = ref([]);
const selectedProduct = ref(null);

onMounted(async () => {
  try {
    loading.value = true;

    const response = await fetch("https://dummyjson.com/products/1");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const item = await response.json();

    const dummyProduct = {
      id: `dummy-${item.id}`,
      name: item.title,
      price: (item.price * 300).toFixed(0),
      category: "Premium",
      image: item.thumbnail,
      description: item.description,
    };

    products.value = [...localProductData, dummyProduct];
  } catch (err) {
    console.error("API Fetch Error:", err);
    products.value = localProductData;
  } finally {
    loading.value = false;
  }
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});
</script>

<style scoped>
.shop-section {
  padding: 80px 40px;
  background: #f5efe6;
}

.title-area {
  text-align: center;
  margin-bottom: 40px;
}

.title-area h1 {
  font-size: 40px;
}

.title-area p {
  color: #666;
}

.filter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
}

.search-input {
  width: 320px;
  padding: 14px;
  border-radius: 10px;
  border: none;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.categories button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.categories .active {
  background: #3b82f6;
  color: white;
}

.status-msg {
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 40px 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 35px;
}
</style>