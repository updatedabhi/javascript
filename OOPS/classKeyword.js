class CreateUser {
  constructor(fName, lName, email, age, address) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    console.log(`Name: ${this.fName} ${this.lName}\nAddress: ${this.address}`);
  }
  is18() {
    this.age >= 18 ? console.log("Yes") : console.log("No");
  }
}

const user1 = new CreateUser(
  "Abhishek",
  "Gupta",
  "fake@gmail.com",
  24,
  "Patna"
);

user1.about();

user1.is18();

console.log("jo bhi sikha o practice kr lo");

class Animal {
  constructor(name, age, food) {
    this.name = name;
    this.age = age;
    this.food = food;
  }
  eat() {
    console.log(`${this.name} eats ${this.food}\n${this.age} years old`);
  }
}

class Dog extends Animal {
  constructor(name, age, food, owner) {
    super(name, age, food);
    this.owner = owner;
  }
  whoIsOwner() {
    console.log(this.owner);
  }
  isCute() {
    this.age <= 1 ? console.log("Aww so cute") : console.log("cute");
  }
}

const pig = new Animal("Mota suar", 19, "Mud");
pig.eat();

const pitbull = new Dog("Tom", 1, "chicken", "Abhishek");
pitbull.eat();
pitbull.isCute();
pitbull.whoIsOwner();
