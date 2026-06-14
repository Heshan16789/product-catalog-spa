<template>
  <section class="shop-section">

    <!-- Title -->
    <div class="title-area">
      <h1>OUR ONLINE COFFEE SHOP</h1>

      <p>
        Discover premium roasted coffee crafted for every coffee lover.
      </p>
    </div>

    <!-- Filter Section -->
    <div class="filter-section">

      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Search coffee..."
        class="search-input"
      />

      <!-- Categories -->
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

    <!-- Product Grid -->
    <div class="product-grid">

      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card"
        @click="openProduct(product.id)"
      >
        <img :src="product.image" />

        <h3>{{ product.name }}</h3>

        <p class="category">{{ product.category }}</p>

        <p class="price">LKR {{ product.price }}</p>

        <button>Add To Cart</button>
      </div>

    </div>

  </section>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const search = ref("")
const selectedCategory = ref("All")

const products = [

  // ESPRESSO
  {
    id: 1,
    name: "Ethiopian Espresso",
    category: "Espresso",
    price: 3500,
    image: new URL("../assets/p1.png", import.meta.url).href,
  },

  {
    id: 2,
    name: "Dark Espresso",
    category: "Espresso",
    price: 4200,
    image: new URL("../assets/dark.jpg", import.meta.url).href,
  },

  {
    id: 3,
    name: "Italian Espresso",
    category: "Espresso",
    price: 4600,
    image: new URL("../assets/italian.jpg", import.meta.url).href,
  },

  {
    id: 4,
    name: "Classic Espresso Shot",
    category: "Espresso",
    price: 3900,
    image: new URL("../assets/classic.jpg", import.meta.url).href,
  },

  {
    id: 5,
    name: "Caramel Espresso",
    category: "Espresso",
    price: 4800,
    image: new URL("../assets/caramel.jpg", import.meta.url).href,
  },

  // LATTE
  {
    id: 6,
    name: "Classic Latte",
    category: "Latte",
    price: 4100,
    image: new URL("../assets/classiclatte.jpg", import.meta.url).href,
  },

  {
    id: 7,
    name: "Vanilla Latte",
    category: "Latte",
    price: 4500,
    image: new URL("../assets/vanilla.webp", import.meta.url).href,
  },

  {
    id: 8,
    name: "Hazelnut Latte",
    category: "Latte",
    price: 4700,
    image: new URL("../assets/hazelnut.jpg", import.meta.url).href,
  },

  {
    id: 9,
    name: "Iced Latte",
    category: "Latte",
    price: 4300,
    image: new URL("../assets/icedlatte.webp", import.meta.url).href,
  },

  {
    id: 10,
    name: "Mocha Latte",
    category: "Latte",
    price: 5200,
    image: new URL("../assets/mochalatte.jpg", import.meta.url).href,
  },

  // COLD BREW
  {
    id: 11,
    name: "Cold Brew Black",
    category: "Cold Brew",
    price: 3400,
    image: new URL("../assets/coldblack.jpg", import.meta.url).href,
  },

  {
    id: 12,
    name: "Iced Cold Brew",
    category: "Cold Brew",
    price: 3600,
    image: new URL("../assets/icedcoldblack.jpg", import.meta.url).href,
  },

  {
    id: 13,
    name: "Nitro Cold Brew",
    category: "Cold Brew",
    price: 4900,
    image: new URL("../assets/nitro.jpg", import.meta.url).href,
  },

  {
    id: 14,
    name: "Vanilla Cold Brew",
    category: "Cold Brew",
    price: 4200,
    image: new URL("../assets/vanillacoldbrew.webp", import.meta.url).href,
  },

  {
    id: 15,
    name: "Chocolate Cold Brew",
    category: "Cold Brew",
    price: 4500,
    image: new URL("../assets/chocolate.jpg", import.meta.url).href,
  },

  // PREMIUM
  {
    id: 16,
    name: "Premium Gold Roast",
    category: "Premium",
    price: 6500,
    image: new URL("../assets/goldcoffee.jpg", import.meta.url).href,
  },

  {
    id: 17,
    name: "Luxury Bean Reserve",
    category: "Premium",
    price: 7200,
    image: new URL("../assets/Private_Reserve.webp", import.meta.url).href,
  },

  {
    id: 18,
    name: "Royal Arabica",
    category: "Premium",
    price: 8100,
    image: new URL("../assets/arabica.jpg", import.meta.url).href,
  },

  {
    id: 19,
    name: "Diamond Roast",
    category: "Premium",
    price: 9000,
    image: new URL("../assets/diamond.webp", import.meta.url).href,
  },

  {
    id: 20,
    name: "Reserve Collection",
    category: "Premium",
    price: 8500,
    image: new URL("../assets/Private_Reserve.webp", import.meta.url).href,
  },

  // CAPPUCCINO
  {
    id: 21,
    name: "Classic Cappuccino",
    category: "Cappuccino",
    price: 4000,
    image: new URL("../assets/cappauccinoclassic.webp", import.meta.url).href,
  },

  {
    id: 22,
    name: "Chocolate Cappuccino",
    category: "Cappuccino",
    price: 4500,
    image: new URL("../assets/chocolatecappuccino.jpg", import.meta.url).href,
  },

  {
    id: 23,
    name: "Caramel Cappuccino",
    category: "Cappuccino",
    price: 4700,
    image: new URL("../assets/caramecappucl.jpg", import.meta.url).href,
  },

  {
    id: 24,
    name: "Vanilla Cappuccino",
    category: "Cappuccino",
    price: 4600,
    image: new URL("../assets/vanillabox.avif", import.meta.url).href,
  },

  {
    id: 25,
    name: "Premium Cappuccino",
    category: "Cappuccino",
    price: 5200,
    image: new URL("../assets/Capp120_3_600x.webp", import.meta.url).href,
  },

  // MOCHA
  {
    id: 26,
    name: "Dark Mocha",
    category: "Mocha",
    price: 5300,
    image: new URL("../assets/darkMocha.jpg", import.meta.url).href,
  },

  {
    id: 27,
    name: "White Mocha",
    category: "Mocha",
    price: 5500,
    image: new URL("../assets/white mocha.png", import.meta.url).href,
  },

  {
    id: 28,
    name: "Hazelnut Mocha",
    category: "Mocha",
    price: 5700,
    image: new URL("../assets/hazelnut mocha.jpg", import.meta.url).href,
  },

  {
    id: 29,
    name: "Iced Mocha",
    category: "Mocha",
    price: 5000,
    image: new URL("../assets/Iced Mocha.webp", import.meta.url).href,
  },

  {
    id: 30,
    name: "Premium Mocha Blend",
    category: "Mocha",
    price: 6200,
    image: new URL("../assets/mocha blendy.webp", import.meta.url).href,
  },

]

const filteredProducts = computed(() => {
  return products.filter((product) => {

    const matchesCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})

const openProduct = (id) => {
  router.push(`/product/${id}`)
}
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
  font-weight: bold;
}

.title-area p {
  margin-top: 10px;
  color: #666;
}

/* FILTERS */
.filter-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  align-items: center;
}

.search-input {
  width: 320px;
  padding: 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 15px;
}

.categories {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.categories button {
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  background: white;
  cursor: pointer;
  transition: 0.3s;
}

.categories button.active {
  background: #3b82f6;
  color: white;
}

/* PRODUCTS */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 35px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 14px rgba(0,0,0,0.08);
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: contain;
}

.card h3 {
  margin-top: 20px;
  font-size: 18px;
}

.category {
  margin-top: 8px;
  color: #777;
  font-size: 14px;
}

.price {
  margin-top: 10px;
  color: #d97706;
  font-weight: bold;
  font-size: 18px;
}

.card button {
  margin-top: 15px;
  border: none;
  background: #3b82f6;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
}

@media (max-width: 768px) {

  .shop-section {
    padding: 60px 20px;
  }

  .title-area h1 {
    font-size: 28px;
  }

  .search-input {
    width: 100%;
  }

}
</style>