import ProductBuilder from "./builders/ProductBuilder.js";
import StudentDiscountStrategy from "./strategies/StudentDiscountStrategy.js";
// import VipDiscountStrategy from "./strategies/VipDiscountStrategy.js";
// import EmployeeDiscountStrategy from "./strategies/EmployeeDiscountStrategy.js";
import User from "./observers/User.js";
import PriceDropNotifier from "./observers/PriceDropNotifier.js";

// ==========================================
// CLEAN KART - ITERATION 4
// Builder Pattern
// ==========================================

// Previous iterations:
// Iteration 1 - Basic Refactoring
// Iteration 2 - Strategy Pattern
// Iteration 3 - Observer Pattern
// Iteration 4 - Builder Pattern

let products = [];
let cart = [];
let users = [];

// Create the Observer Pattern subject.
const priceDropNotifier = new PriceDropNotifier();

// ------------------------------------------
// Add a product using the Builder Pattern
// ------------------------------------------

function addProduct(name, price, category, stock) {
  const product = new ProductBuilder()
    .setName(name)
    .setPrice(price)
    .setCategory(category)
    .setStock(stock)
    .build();

  products.push(product);
}

// ------------------------------------------
// Add item to cart
// ------------------------------------------

function addToCart(productName, quantity) {
  const product = products.find(
    (item) => item.name === productName
  );

  if (!product) {
    console.log("Product not found.");
    return;
  }

  if (product.stock < quantity) {
    console.log("Not enough stock.");
    return;
  }

  const existingCartItem = cart.find(
    (item) => item.name === productName
  );

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      quantity,
    });
  }

  product.stock -= quantity;

  console.log(`${productName} added to cart.`);
}

// ------------------------------------------
// Calculate total
// ------------------------------------------

function calculateTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// ------------------------------------------
// Calculate discount
// ------------------------------------------

// Calculate the discount using the selected strategy.
function calculateDiscount(total, discountStrategy) {
  return discountStrategy.calculateDiscount(total);
}

// ------------------------------------------
// Display cart items
// ------------------------------------------

function displayCartItems() {
  for (const item of cart) {
    const itemTotal = item.price * item.quantity;

    console.log(
      `${item.name} x${item.quantity} = ${itemTotal}`
    );
  }
}

// ------------------------------------------
// Checkout
// ------------------------------------------

function checkout(discountStrategy, customerType) {
  const total = calculateTotal();

  // The discount behavior is provided by the strategy.
  const discount = calculateDiscount(
    total,
    discountStrategy
  );

  const finalTotal = total - discount;

  console.log("================================");
  console.log("CHECKOUT");
  console.log("Items:");

  displayCartItems();

  console.log("Total:", finalTotal);
  console.log("Customer:", customerType);
  console.log("================================");

  return finalTotal;
}

// ------------------------------------------
// Remove item from cart
// ------------------------------------------

function removeFromCart(productName) {
  cart = cart.filter(
    (item) => item.name !== productName
  );

  console.log(`${productName} removed.`);
}

// ------------------------------------------
// Add users
// ------------------------------------------

// Create and register a User as an observer.
function addUser(name, email, userType) {
  const user = new User(
    name,
    email,
    userType
  );

  users.push(user);

  // Subscribe the user to price-drop notifications.
  priceDropNotifier.subscribe(user);
}

// ------------------------------------------
// Check for price drop
// ------------------------------------------

// Check whether a product price has dropped.
function checkPriceDrop(
  oldPrice,
  newPrice,
  productName
) {
  if (newPrice >= oldPrice) {
    return;
  }

  const message =
    `the price of ${productName} dropped from ` +
    `${oldPrice} to ${newPrice}`;

  // Notify all subscribed users.
  priceDropNotifier.notify(message);
}

// ==========================================
// TEST DATA
// ==========================================

addProduct("Laptop", 1200, "Electronics", 10);
addProduct("Mouse", 30, "Accessories", 20);
addProduct("Keyboard", 50, "Accessories", 15);

addUser(
  "Aliyu Mubarak",
  "aliyu@example.com",
  "student"
);

addUser(
  "Dr. Ahmed",
  "ahmed@example.com",
  "vip"
);

addToCart("Laptop", 1);
addToCart("Mouse", 2);

console.log("\nCart total:", calculateTotal());

const studentDiscount = new StudentDiscountStrategy();

checkout(studentDiscount, "student");

removeFromCart("Mouse");

checkPriceDrop(50, 40, "Keyboard");