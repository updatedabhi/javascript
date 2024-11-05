const obj1 = {
  key1: "Value1",
  key2: "Value2",
};

console.log("obj1", obj1);
console.log("obj1 [[prototype]]", obj1.__proto__);

const obj2 = Object.create(obj1);

obj2.key1 = "ValueOne";

console.log("obj2", obj2);
console.log("obj2 [[prototype]]", obj2.__proto__);
