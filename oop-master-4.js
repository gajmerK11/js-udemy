class Bird {
  fly() {
    return "Flying...";
  }
}

class Penguin extends Bird {
  fly() {
    return "I can't fly...";
  }
}

class Sparrow extends Bird {}

const newBird = new Sparrow();
console.log(newBird.fly());
