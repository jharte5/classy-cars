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
  constructor(name) {
    super()
  }

}

class Ferrari {
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