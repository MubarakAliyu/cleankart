// ==========================================
// PRODUCT BUILDER
// ==========================================

import Product from "./Product.js";

// Builder used to create Product objects
// step by step.

export default class ProductBuilder {
  constructor() {
    this.name = "";
    this.price = 0;
    this.category = "";
    this.stock = 0;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setCategory(category) {
    this.category = category;
    return this;
  }

  setStock(stock) {
    this.stock = stock;
    return this;
  }

  build() {
    return new Product({
      name: this.name,
      price: this.price,
      category: this.category,
      stock: this.stock,
    });
  }
}