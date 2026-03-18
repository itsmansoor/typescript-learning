class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new Person("Mansoor");
user.greet();

class Car {
  brand: string;

  constructor(brand: string) {
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
  public name: string;
  private password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}