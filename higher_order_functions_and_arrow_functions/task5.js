// Task 5: Find the Longest Word

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
const findLongestWord = (arr) => {
  return arr.reduce((acc, current) => {
    if (current.length > acc.length) {
      return current;
    } else {
      return acc;
    }
  });
};
console.log(findLongestWord(["k", "kk", "kkk", "republic"]));
