const obj = {
  name: "Abhishek",
  age: 9,
  about: function () {
    console.log(`${this.name} ${this.age}`);
  },
};

// yah hai wo galti
// const myAbout = obj.about;
// myAbout();

// Kam aise hoga
const myAbout = obj.about.bind(obj);
myAbout();
