import { reactive } from "vue";

export const cartState = reactive({
  items: [],
  addItem(product) {
    const existing = this.items.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1,
      });
    }
  },
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  },
  get totalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  get totalPrice() {
    return this.items.reduce((sum, item) => {
      const numericPrice = Number(String(item.price).replace(/[^0-9.-]+/g, "")) || 0;
      return sum + numericPrice * item.quantity;
    }, 0);
  }
});