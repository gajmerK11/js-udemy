function filterNumbers(arr) {
  return arr.filter(function (element) {
    return typeof element === "number";
  });
}
console.log(filterNumbers([1, "a", "cat", 2]));
