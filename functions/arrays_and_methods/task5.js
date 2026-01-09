// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([[[1], [2, 3]]]));
