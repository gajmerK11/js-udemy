class Bike {
  start() {
    const signal = "The bike has started";
    return signal;
  }
  doWheelie(signalreciever = this.start()) {
    if (signalreciever) {
      return "Bike's front wheel is up";
    } else {
      return "Bike didn't start";
    }
  }
  doWheelieButton() {
    return this.doWheelie();
  }
}
const newBike = new Bike();
console.log(newBike.doWheelieButton());
