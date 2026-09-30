## CleanKart - Refactor & Iterate

CleanKart is an online shopping cart system developed as part of the
Low-Level Design: Refactoring Techniques & Iterative Development checkpoint.

The project demonstrates how a basic procedural implementation can be
progressively refactored into a cleaner, more modular, maintainable,
and extensible codebase.

## Objective

The main objective of this project is to practice:

- Refactoring techniques
- Clean code principles
- Iterative development
- Design patterns
- Modular and maintainable JavaScript code

The project progresses through multiple iterations while keeping the
application runnable and preserving its core functionality.

## Checkpoint Requirements

The project applies the following techniques and design patterns:

1. Refactoring techniques
2. Strategy Pattern
3. Observer Pattern
4. Builder Pattern

## Project Structure

```text
cleankart/
├── src/
│   ├── builders/
│   │   ├── Product.js
│   │   └── ProductBuilder.js
│   │
│   ├── observers/
│   │   ├── PriceDropNotifier.js
│   │   └── User.js
│   │
│   ├── strategies/
│   │   ├── DiscountStrategy.js
│   │   ├── StudentDiscountStrategy.js
│   │   ├── VipDiscountStrategy.js
│   │   └── EmployeeDiscountStrategy.js
│   │
│   └── cleankart.js
│
├── package.json
├── README.md
└── reflection.md
````

## Iterative Development

### Iteration 1 - Basic Refactoring

The original application contained several code smells and was deliberately
kept simple.

The first iteration focused on:

* Improving naming
* Extracting reusable functions
* Reducing unnecessary repetition
* Organizing related operations
* Keeping the application runnable after changes

### Iteration 2 - Strategy Pattern

The Strategy Pattern was introduced for discount calculation.

Different discount rules are represented by separate strategies:

* Student: 10%
* VIP: 20%
* Employee: 15%

The checkout process receives a discount strategy instead of containing
multiple customer-specific discount conditions.

This makes the discount logic easier to extend and maintain.

### Iteration 3 - Observer Pattern

The Observer Pattern was introduced for price-drop notifications.

`PriceDropNotifier` acts as the subject and keeps track of subscribed users.

Users act as observers and implement:

```js
update(message)
```

When a product price drops, the notifier sends the message to all
subscribed observers.

This separates notification logic from the shopping cart logic.

### Iteration 4 - Builder Pattern

The Builder Pattern was introduced for creating Product objects.

Instead of constructing products directly, `ProductBuilder` provides
methods such as:

```js
setName()
setPrice()
setCategory()
setStock()
build()
```

This provides a flexible way to construct Product objects and makes the
creation process easier to extend.

## Core Features

The CleanKart system supports:

* Adding products
* Adding products to the cart
* Calculating cart totals
* Displaying cart items
* Removing products from the cart
* Checkout
* Discount calculation
* Price-drop notifications
* Different discount strategies
* Flexible Product creation

## Technologies

* JavaScript
* Node.js
* ES Modules
* Git & GitHub

## ES Modules

The project uses ES Modules.

The `package.json` contains:

```json
"type": "module"
```

This allows the project to use modern JavaScript imports and exports.

## How to Run

Make sure Node.js is installed.

From the project directory, run:

```bash
node src/cleankart.js
```

The application will display the shopping cart operations,
checkout information, and price-drop notifications in the terminal.

## Example Output

```text
Laptop added to cart.
Mouse added to cart.

Cart total: 1260

CHECKOUT
Items:
Laptop x1 = 1200
Mouse x2 = 60
Total: 1134
Customer: student

Mouse removed.

Hello Aliyu Mubarak, the price of Keyboard dropped from 50 to 40
Hello Dr. Ahmed, the price of Keyboard dropped from 50 to 40
```

## Design Improvements

The project demonstrates how iterative refactoring can improve a codebase
without changing its core behavior.

The major improvements include:

* Better separation of responsibilities
* Reduced coupling
* Reusable components
* Flexible discount calculation
* Decoupled notifications
* Flexible Product construction
* Improved maintainability
* Easier future extension

## Reflection

A detailed reflection on the refactoring process, challenges, design
improvements, and use of design patterns is available in:

```text
reflection.md
```

## Author

Aliyu Mubarak

````