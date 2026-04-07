const person = {
  name: "Kumar",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();
