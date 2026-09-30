// ==========================================
// PRODUCT
// ==========================================

// Product represents a product in CleanKart.

export default class Product {
  constructor({
    name,
    price,
    category,
    stock,
  }) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }
}