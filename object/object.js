// Creating object with different ways:

//  1. using object literals one of the most widely used way to create objecti in javascript

const person = {
  name: 'Abhishek',
  age: 34,
  city: 'Araria',
  qualification: 'ITUS',
  hasGF: false
}

console.log(person)

// 2. using new Object() syntax

const Employee = new Object();
Employee.name = 'Sonu';
Employee.work = 'sweeper';
Employee.city = 'jokihat';
Employee.age = 12;

console.log(Employee)

// 3. using constructor function

function Animal(name, age, noOfLegs, sounds, color) {
  this.name = name;
  this.age = age;
  this.noOfLegs = noOfLegs;
  this.sounds = sounds;
  this.color = color;
}

const animal1 = new Animal('cow', 34, 4, 'gaow gaooow gaoooow....', 'black');
const animal2 = new Animal('cat', 14, 4, 'mew mewww mewwww....');
console.log(animal1);
console.log(animal2)

// Using es6 classes

class Leader {
  constructor(name, age, partyName, isTheif) {
    this.name = name;
    this.age = age;
    this.partyName = partyName;
    this.isTheif = isTheif;
  }

  slogan() {
    console.log(`${this.name} jindabad jindabad....`)
  }
}

const leader1 = new Leader("lalu", 78, "bjp", "nhi malum");
console.log(leader1);
leader1.slogan();



