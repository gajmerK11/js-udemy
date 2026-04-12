function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  return increment;
}
const increment = createCounter();
console.log(increment());
console.log(increment());
