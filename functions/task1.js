// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
  if (typeof input === "string") {
    let number = Number(input);
    if (number == NaN) {
      return "Not a Number";
    } else {
      return number;
    }
  }
}
console.log(stringToNumber("126"));
