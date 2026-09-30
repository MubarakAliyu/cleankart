// Import the base discount strategy.
import DiscountStrategy from "./DiscountStrategy.js";

// Defines the discount rule for employees.
export default class EmployeeDiscountStrategy
  extends DiscountStrategy {

  calculateDiscount(total) {
    return total * 0.15;
  }
}