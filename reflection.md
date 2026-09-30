# CleanKart Reflection Report

The CleanKart project started as a simple procedural shopping cart with several code quality issues, including duplicated logic, long functions, global data, and tightly connected responsibilities. The first iteration focused on basic refactoring by improving variable and function names, extracting reusable methods, removing redundant code, and simplifying calculations.

In the second iteration, the Strategy Pattern was introduced for discount calculation. Separate strategies were created for students, VIP customers, and employees. This removed discount-specific conditions from the checkout process and made it easier to add new discount rules without changing the main checkout logic.

The third iteration introduced the Observer Pattern for price-drop notifications. A PriceDropNotifier became responsible for managing observers and sending notifications, while users handled the update behavior themselves. This separated notification responsibilities from the shopping cart logic and reduced coupling.

Finally, the Builder Pattern was introduced for creating Product objects. Instead of constructing product objects directly, ProductBuilder provides individual methods for setting product properties before creating the final Product object. This makes product creation more flexible and easier to extend.

Throughout the project, the code was tested after each major change to ensure that the original functionality remained unchanged. The resulting structure is more modular, reusable, maintainable, and easier to extend than the original procedural implementation.