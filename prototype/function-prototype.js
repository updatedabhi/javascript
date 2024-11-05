function hello() {
  console.log("Hello");
}

console.log(hello.name);

hello.key1 = "Value1";

console.log(hello.prototype);

hello.prototype.gree = function () {
  console.log("Good morning");
};

hello.prototype.a = 234;
hello.prototype.gree();
console.log(hello.prototype);
