// this refers to current caller object

function about(role, experience) {
  console.log(this.name, this.age, role, experience);
}

const emp1 = {
  name: "Abhishek",
  age: 34,
};

const emp2 = {
  name: "Manish",
  age: 89,
};

// about.call(emp1, "MERN", 3);
// about.apply(emp1, ["Javascript", 3]);

const aboutemp1 = about.bind(emp1, "PHP", 5);
aboutemp1();
