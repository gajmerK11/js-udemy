class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: [${this.make}], Model: [${this.model}]`;
  }
  move() {
    return "The vehicle is moving";
  }
  static isVehicle(obj) {
    if (obj instanceof Vehicle) {
      return true;
    } else {
      return false;
    }
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }
  move() {
    return "The car is driving";
  }
}

const newCar = new Car("2019", "BMW");
console.log(Vehicle.isVehicle(newCar));
