// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input) {
  if (typeof input === "string") {
    return "I'm a string!";
  } else if (typeof input === "number") {
    return "I'm a number!";
  }
}
console.log(whatAmI("abc"));
