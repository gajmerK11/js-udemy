// Task 2: Multiplication Table

// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    const result = n * i;
    table.push(`2 x ${i} = ${result}`);
  }
  return table;
}
console.log(printMultiplicationTable(2));
