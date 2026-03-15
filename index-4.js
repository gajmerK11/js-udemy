class BankAccount {
  #_balance;

  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#_balance = balance;
  }

  deposit(amount) {
    if (amount <= 0 || typeof amount !== "number") {
      throw new Error("Deposit amount must be a positive number.");
    }
    this.balance = this.balance + amount;
    return `${amount} has been credited. New balance: ${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || typeof amount !== "number") {
      throw new Error("Withdrawal amount must be a positive number.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }
    this.balance = this.balance - amount;
    return `${amount} has been withdrawn. New balance: ${this.balance}`;
  }

  get balance() {
    return this.#_balance;
  }

  set balance(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Balance must be a non-negative number.");
    }
    this.#_balance = value;
  }
}
