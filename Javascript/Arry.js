const marks = [45, 67, 89, 90, 34];

console.log(marks);

const subject = ["Math", "Science", "Social", "Sanskrit", "Hindi"];

console.log(subject);

const mixedArry = ["Abhishek", 19, [6, 7]];

console.log(Array.isArray(mixedArry));

console.log(mixedArry);

const arry = new Array(4, "Sonu", "Roshan", [34, 46, "Abhishek"]);

console.log(arry[3].length);

let value = arry.indexOf("Sonu");

console.log(value);

// Modification of Array.
let myArry = [3, 55, 8, "Keyboard", "mouse"];

let myArry2 = [34, 45, 789];

// myArry.push(true);

// myArry.unshift(899);

// myArry.pop();

// myArry.shift();

// myArry.splice(2, 3);

// myArry.reverse();

myArry = myArry.concat(myArry2);

console.log(myArry);

// Object

let firstStudent = {
    name: "Abhishek",
    marks: 98,
    javascript: false
}

console.log(firstStudent);

console.log(firstStudent.name);



