function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Woof!";
};

const dog1 = new Dog();
console.log(dog1.speak());
console.log(dog1.bark());
