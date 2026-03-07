// let computer = { cpu: 12 };
// let lenovo = { screen: "Hd" };
// let tomHardware = {};
// console.log(`computer`, computer.__proto__);

const dog = {
  barks: true,
  bring() {
    return "Dog will bring the stick";
  },
};

const cat = Object.create(dog);

console.log(cat.bring());
