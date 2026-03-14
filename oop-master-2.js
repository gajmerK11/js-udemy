// Encapsulation
class Bike {
  engine = "400cc";
  engineInfo() {
    return `This bike is ${this.engine} bike`;
  }
  getEngine() {
    return `${this.engine}`;
  }
}
const newBike = new Bike();
// console.log(newBike.engineInfo());
newBike.engine = "600cc";
console.log(newBike.engineInfo());
