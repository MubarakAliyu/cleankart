// Base discount strategy.
export default class DiscountStrategy {
  calculateDiscount() {
    throw new Error(
      "calculateDiscount() must be implemented."
    );
  }
}