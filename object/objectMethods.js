const person = {
  name: 'Abhishek',
  age: 34,
  city: 'Araria',
  qualification: 'ITUS',
  hasGF: false
}


// 1. object.keys()
console.log(Object.keys(person));

// 2. Object.values(obj)
console.log(Object.values(person));

// 3. object.entries()
console.log(Object.entries(person));

// 4. Object.assign(target, ...sources); use to create copy
const person2 = Object.assign(person);
person2.pin = 34322;

console.log("Person2: ", person2);

console.log("person: ", person);


const myObject = () =>
({
  name: 'Abhishek',
  age: 34,
  city: 'Araria',
  hasGF: false,
  greet: () => "Hello Bhai Good Morning!"
})

const { name, age, greet } = myObject();

console.log(name + ' ' + age);

console.log(greet())

