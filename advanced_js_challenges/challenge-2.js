function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  return increment;
}
const increment = createCounter();
console.log(increment());

function rateLimiter(fn, limit) {
  let lastCallTime = null;

  return function () {
    const currentTime = Date.now();

    if (lastCallTime === null || currentTime - lastCallTime >= limit) {
      lastCallTime = currentTime;
      return fn();
    } else {
      return "Rate limit exceeded";
    }
  };
}
