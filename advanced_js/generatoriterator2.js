// function* infiniteNumbers() {
//   let n = 1;
//   while (true) {
//     yield n++;
//   }
// }

// const gen = infiniteNumbers();
// console.log(gen.next().value);
function* infiniteNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}
const gen = infiniteNumbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
