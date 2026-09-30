// ==========================================
// USER OBSERVER
// ==========================================

// A User acts as an Observer.
// The notifier will call update() when a price drops.

export default class User {
  constructor(name, email, type) {
    this.name = name;
    this.email = email;
    this.type = type;
  }

  // Receive and display a price-drop notification.
  update(message) {
    console.log(`Hello ${this.name}, ${message}`);
  }
}