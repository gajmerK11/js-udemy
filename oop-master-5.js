class Varosa {
  constructor(name, salary) {
    this.name = name;
    this.abcd = salary;
  }
  get salary() {
    if (this.abcd < 25000) {
      return "This is too low";
    } else {
      return "This is good";
    }
  }
  set salary(value) {
    this.abcd = value;
  }
}
const newEmployee = new Varosa("Kumar", 24000);
console.log(newEmployee.salary);
