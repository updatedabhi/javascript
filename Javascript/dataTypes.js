// primitive data types

// 1. string
let myName = "Abhishek";

console.log("My name is " + myName, (typeof myName));

console.log("Your name is written in " + (typeof myName));

// 2.Numbers
let myAge = 19;

console.log("i am " + myAge + " years old.")

console.log("Your Age is written in " + (typeof myAge));

// 3. Boolean
let htmlSkill = true;

console.log("Data type is " + (typeof htmlSkill));

// 4. Null
let nullVar = null;

console.log("Data type is " + (typeof nullVar));

// Reference Data Type:

// Arrays
let myArry = [3, 4, 5.5, 8, 0, 45, "Abhishek", false];

console.log("Data type is " + (typeof myArry));

// Object literals:
let student = {
    studentName: "Manish",
    age: 18,
    marks:90
}

console.log(student);
console.log("Mr. " + student.studentName);
console.log("Your Marks is " + student.marks);

// function
function firstFunction() {
    return 0;
}

console.log(typeof firstFunction);

// Date
let date = new Date();

console.log(typeof date)



