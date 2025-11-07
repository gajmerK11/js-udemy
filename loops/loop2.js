let num = 5;
let countdown = [];
while (num >= 1) { // Fix: should be num >= 1 to count down from 5 to 1
    countdown.push(num); // Fix: use push instead of append in JavaScript
    num--;
}
console.log(countdown);