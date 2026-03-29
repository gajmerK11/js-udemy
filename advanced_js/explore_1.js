function sayHello() {
  console.log("Hello there");
}

function sayMyName() {
  console.log("Heisenberg....");
}

sayHello();
// sayMyName();

setTimeout(() => {
  sayMyName();
}, 4000);
