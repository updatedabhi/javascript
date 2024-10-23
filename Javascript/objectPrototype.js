let myObject = {
    name: "Abhishek",
    course: "Webdevlopment",
    duration: "6-Month",
    fee: 4000
}

console.log(myObject);

// we will always edit the prototype of object who made up with the help of constructor not an universal Object

function MyObject2(inputName) {
    this.name = inputName;
}

MyObject2.prototype.getName = function() {
    return this.name;
}

MyObject2.prototype.setName = function(newName) {
    this.name = newName;
}

let student = new MyObject2("Himanshu");

console.log(student);