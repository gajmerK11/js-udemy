function* weekdays() {
  yield "Sunday";
  yield "Monday";
  yield "Tuesday";
  yield "Wednesday";
  yield "Thursday";
  yield "Friday";
  yield "Saturday";
}

for (const day of weekdays()) {
  console.log(day);
}
