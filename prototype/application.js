// const addMethod = {
//   about: function () {
//     console.log(this.name, this.age, this.address);
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

function createUser(username, age, address) {
  // function proto me set kr de rhe h object.create use krke
  const user = Object.create(createUser.prototype);
  user.name = username;
  user.age = age;
  user.address = address;
  return user;
}

createUser.prototype.about = function () {
  console.log(this.name, this.age, this.address);
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = createUser("Abhishek", 55, "Patna Bihar");
user1.about();
