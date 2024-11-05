function CreateUser(fName, lName, email, age, address) {
  // when you create user using this keyword this is actually done by javascript itself and also you don't need to return this
  // this = Object(CreateUser.prototype);
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.age = age;
  this.address = address;
}

CreateUser.prototype.about = function () {
  console.log(`Name: ${this.fName} ${this.lName}\nAddress: ${this.address}`);
};

CreateUser.prototype.is18 = function () {
  this.age >= 18 ? console.log("Yes") : console.log("No");
};

const user1 = new CreateUser(
  "Abhishek",
  "Gupta",
  "fake@gmail.com",
  24,
  "Patna"
);
user1.about();
user1.is18();
