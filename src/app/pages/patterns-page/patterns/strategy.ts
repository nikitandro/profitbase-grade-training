interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  private readonly cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  public pay(amount: number): void {
    console.log(`Paying ${amount} using Credit Card: ${this.cardNumber}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private readonly email: string;

  constructor(email: string) {
    this.email = email;
  }

  public pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal: ${this.email}`);
  }
}

class ShoppingCart {
  private paymentStrategy?: PaymentStrategy;

  public setPaymentStrategy(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  public checkout(amount: number): void {
    if (!this.paymentStrategy) {
      throw new Error('Payment strategy not set.');
    }
    this.paymentStrategy.pay(amount);
  }
}

const cart = new ShoppingCart();

cart.setPaymentStrategy(new CreditCardPayment('111111111'));
cart.checkout(100);

cart.setPaymentStrategy(new PayPalPayment('user@example.com'));
cart.checkout(200);
