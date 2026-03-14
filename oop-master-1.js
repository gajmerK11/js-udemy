// Inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an example of inheritance.`;
  }

  start() {
    const original = super.start();
    return original + " Engine running.";
  }
}

const myNewCar = new Car("Tata", "Camry");
console.log(myNewCar.start());
