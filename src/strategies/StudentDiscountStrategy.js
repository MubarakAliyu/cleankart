// Import the base discount strategy.
import DiscountStrategy from "./DiscountStrategy.js";

// Defines the discount rule for students.
export default class StudentDiscountStrategy
  extends DiscountStrategy {

  calculateDiscount(total) {
    return total * 0.1;
  }
}