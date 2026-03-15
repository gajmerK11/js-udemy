function Person(name, age) {
  this.name = name;
  this.age = age;

  if (age < 0) {
    throw Error("Age must be a positive number");
  }

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

const person = new Person("Alice", 30);
console.log(person.greet());
