// ==========================================
// PRICE DROP NOTIFIER
// ==========================================

// This class acts as the Subject in the Observer Pattern.
// It keeps track of observers and notifies them when
// a product price drops.

export default class PriceDropNotifier {
  constructor() {
    // Store all subscribed observers.
    this.observers = [];
  }

  // Add an observer to the notification list.
  subscribe(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  // Remove an observer from the notification list.
  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (item) => item !== observer
    );
  }

  // Notify every subscribed observer.
  notify(message) {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }
}