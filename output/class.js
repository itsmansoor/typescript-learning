"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const user = new Person("Mansoor");
user.greet();
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(this.brand + " is driving");
    }
}
const car1 = new Car("Toyota");
car1.drive();
// Access Modifiers (Important)
class User {
    name;
    password;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}
