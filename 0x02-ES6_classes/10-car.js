export default class Car {
  constructor(brand, color, motor) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  //   get brand() {
  //     return this._brand;
  //   }

  //   get color() {
  //     return this._color;
  //   }

  //   get price() {
  //     return this._motor;
  //   }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
