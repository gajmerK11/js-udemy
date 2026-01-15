// Task 2: Function within a function

// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
console.log(outer());
