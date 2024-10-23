// Type conversion

let myVar;

myVar = String(34);

console.log(myVar, (typeof myVar));

let cooking = true;

cooking = String(true);

console.log(cooking, (typeof cooking));

let todayDate = new Date();

todayDate = String(new Date());

console.log(todayDate, (typeof todayDate));

let arry = [34, 545, 566, 34, 778];

arry = String([34, 545, 566, 34, 778]);

console.log(arry.length, typeof arry);

let number = 34;

console.log(number.toString());

let ekString = Number("43453453");

console.log(ekString, typeof ekString);

let koibhiNumber = 45;

koiBhiNumber = parseInt("45");

koibhiNumber = Number("45");

koibhiNumber = parseFloat("45");

console.log(koiBhiNumber.toFixed(45), typeof koibhiNumber);

// Type coercion
let myStr = "56";

let myNum = 34;

console.log(myStr + myNum);

