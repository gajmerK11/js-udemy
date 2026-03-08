// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

// let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);
// function Bike(company) {
//   this.company = company;
//   this.type = function () {
//     return `This bike belongs to ${company}`;
//   };
// }

// const myBike = new Bike("bajaj");
// console.log(myBike.type());
// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };

// let dog = new Animal("Dog");
// console.log(dog.sound());

// let cat = new Animal("Cat");
// console.log(cat.sound());
function Drink(name) {
  // this throws error if 'new' is not used to create an object
  if (!new.target) {
    throw new Error("new use gar behenchod");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("cappuccino");
