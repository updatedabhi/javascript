class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  get details() {
    console.log(`Name: ${this.fName + " " + this.lName}\nAge: ${this.age}`);
  }

  set details(about) {
    const [fName, lName, age] = about.split(" ");
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  static help() {
    console.log(
      "first of all create object of Parent class then you will be able to access its attribute and methods"
    );
  }
}

Person.help();

const p1 = new Person("Abhishek", "Gupta", 34);
p1.details;

p1.details = "Mohit Sharma 98";
p1.details;
