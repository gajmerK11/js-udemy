// Task 4: Transform Array of Objects

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
const getNames = (arr) => {
  const a = arr.map((e) => e.name);
  return a;
};
console.log(
  getNames([
    { name: "Kumar", role: "Team Lead" },
    { name: "Kshitiz", role: "Senior Dev" },
    { name: "Birat", role: "Intern" },
  ])
);
