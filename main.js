class Vehicle {
  constructor(name, wheelCount, maxSpeed) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
  }
  accelerate () {
    let gas = this.maxSpeed / 3
    if(this.speed === this.maxSpeed) {
      return
    }
    this.speed += gas
    
  }
}

class Car extends Vehicle {
  constructor(name, maxSpeed, wheelCount) {
    super(name, 4) 
      this.maxSpeed
  }
  drive() {
    return `Vroom. `
  }
  

}

class Ferrari extends Car {
  constructor() {
    super(Ferrari, 4, 180)
  }
  drive() {
    return `Vroom. I'm a Ferrari!`
  }
  accelerate() {
    let gas = this.maxSpeed / 2
    if(this.speed === this.maxSpeed) {
      return
    }
    this.speed += gas
  }
}

const vehicle = new Vehicle('ford', 4, 120)
vehicle.accelerate()
vehicle.accelerate()
vehicle
module.exports = {
  Vehicle,
  Car,
  Ferrari
}