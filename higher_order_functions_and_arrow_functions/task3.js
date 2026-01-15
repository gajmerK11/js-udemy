// Task 3: Sum of Positive Numbers

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
// function positiveNumbers(element) {
//   if (element > 0) {
//     return element;
//   }
// }
// function sumPositiveNumbers(arr) {
//   const newArr = arr.filter(positiveNumbers);
//   const sum = newArr.reduce((acc, current) => {
//     return acc + current;
//   });
//   return sum;
// }
// console.log(sumPositiveNumbers([1, -1, 2]));
const sumPositiveNumbers = (arr) => {
  return arr
    .filter((element) => element > 0)
    .reduce((acc, current) => acc + current, 0);
};
console.log(sumPositiveNumbers([1, 0, -1]));
