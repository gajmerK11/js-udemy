// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
  return [new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 2, 2, 3, 3, 4, "kumar", "kumar"]));
