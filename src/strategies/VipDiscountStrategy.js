// Import the base discount strategy.
import DiscountStrategy from "./DiscountStrategy.js";

// Defines the discount rule for VIP customers.
export default class VipDiscountStrategy
  extends DiscountStrategy {

  calculateDiscount(total) {
    return total * 0.2;
  }
}