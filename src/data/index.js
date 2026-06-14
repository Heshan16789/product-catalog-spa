import { createRouter, createWebHistory } from "vue-router"

import ProductDetails from "@/views/ProductDetails.vue"

const routes = [
  {
    path: "/product/:id",
    component: ProductDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router