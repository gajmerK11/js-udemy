const person = {
  name: "Kumar",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person;
greetFunction.greet();

const boundGreet = person.greet.bind();
boundGreet();
