/*
1.Ways to print in Javascript.
⭐console.log("Hello Worod!");
⭐alert("This page is under progress...");
*/

/*
2.Javascript console API:
⭐This will help us to write something on document.
document.write("Abhishek is simple and good boy.");

⭐For warning alert message.
console.warn("This is warning");

⭐For erro alert message.
console.error("This is error");

⭐Clearing console
console.clear();

⭐assert in javascript.
console.assert(4 === 5);
console.assert(5 === (8-3));

⭐log console
console.log("The sum of tow five is", 5+5, "(ten)");
*/

// 3.Javascript Variables:
// What is Variables? - Containers to store data values.
var number1 = 34;
var number2 = 56.45;
// console.log(number1 + number2);

// 4.Datatypes in Javascript:
// Numbers
var number1 = 34;
var number2 = 56.45;

// String
var str1 = "This is a string";
var name = "Abhishek";

// Objects
var marks = {
    Abhishek: 34,
    Sunil: 54,
    Pramod: 45,
    Sonu: 77
}

// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a);
// console.log(b);
// console.log(a, b);

// undefined
// var und = undefined;
var und;
// console.log(und);

// null
var n = null;
// console.log(n);

/*
In advance javascript there are two types of data types:
1. Primitive data types- undefined, null, number, string, boolean, symbol
2. Reference data types- Object, Array(collection of different type of data)
*/

var arr = [23, 5, "Abhishek", 56, 7];
/*
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
*/

// operators in javascript
// Arithmetic operatoras
var n1 = 34;
var n2 = 23;
console.log("The value of n1 + n2 is", n1 + n2);
console.log("The value of n1 * n2 is", n1 * n2);
console.log("The value of n1 - n2 is", n1 - n2);
console.log("The value of n1 / n2 is", n1 / n2);

// Assignment Operators
var n3 = n2;
n3 -= 3;
n3 *= 5;
n3 += 56;
n3 /= 9;
console.log(n3);

// comparision operators
var x = 45;
var y = 56;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x < y);
console.log(x > y);

// Logical operators

// AND operatos
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);  

// OR operatos
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);  

// logical not
// console.log(!false);
// console.log(!true);

// Function in javascript
function avg(num1, num2) {
    result = (num1 + num2) / 2;
    return result;
    // return (num1 + num2)/2;
}

// DRY = Do not repeat yourself.
firstAverage = avg(4, 5);
secondAverage = avg(55, 66);
// console.log(firstAverage, secondAverage);

// Conditional statement in Javascript

/*
var age = 22;
// if statement
if (age > 18) {
    console.log("You are mature man");
}
// if - esle statement
if (age > 18) {
    console.log("You are mature man");
}
else{
    console.log("You are simple man");
}
*/

/*
// if - else ladder
if (age > 2) {
    console.log("you're not a kid");
}
else if (age < 2) {
    console.log("you're a kid");
}
else if (age > 14) {
    console.log("you're a teenager");
}
else if (age > 21) {
    console.log("you're a mature boy");
}
else{
    console.log("you're a mature person");
}
*/

/*
// rasna water Challange quiz
function rasnaDrink(age) {
    if (age < 18) {
        console.log("you cannot drink rasna water.");
    }
    else{
        console.log("you can drink rasna water.");
    }
}

rasnaDrink(34);
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);;

// for(i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(arryElement) {
//     console.log(arryElement);

// })

// Break and Continue statement:
// for(i = 0; i < arr.length; i++){
//     if(i == 2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// const k = 0;
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

do {
    console.log(arr[j]);
    j++;
}
while(j < arr.length);

// Array Methods
var myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.pop();
myArr.push("Abhishek");
myArr.shift();
myArr.unshift("Abhishek");
console.log(myArr.unshift("Abhishek"));
console.log(myArr);

// String Methods
// let myString = "Abhishek is a simple boy"
// console.log(myString.indexOf("simple"));
// console.log(myString.slice(1,5));
// console.log(myString.length);
// console.log(myString.replace("simple", "good"));
// let r = myString.replace("simple", "good");
// console.log(r, myString);

// Date in javascript
// let currentDate = new Date();
// console.log(currentDate.getTime());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());

// DOM manipulation
// console.log(document.getElementById("click"))
// let lebi = document.getElementById('click');
// console.log(lebi);

console.log(document.getElementsByClassName("container"));
// let gebc = document.getElementsByClassName("container");
// console.log(gebc);
// console.log(gebc[0]);
// console.log(gebc[0].classList.add("bg-primary"));
// let bgChangeGebc = gebc[1].classList.add("second-bg");
// console.log(bgChangeGebc);

// console.log(gebc[0].innerHTML);
// console.log(gebc[0].innerText);

// console.log(document.getElementsByTagName("h1"));
let tn = document.getElementsByTagName("div");
console.log(tn);
let newCreaedElement = document.createElement("p");
newCreaedElement.innerHTML = "Hey this is Abhishek";
tn[0].appendChild(newCreaedElement);
let newCreaedElement2 = document.createElement("b");
newCreaedElement2.innerText = "Hey this is Abhishek strong";
tn[0].appendChild(newCreaedElement2);
// tn[0].replaceChild(newCreaedElement2, newCreaedElement);

// Note point:
// console.log(document.location);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.scripts);
// console.log(document.links);

console.log(document.querySelector(".container"));
console.log(document.querySelectorAll(".container"));

// Events in Javascript
// firstContainer.addEventlistener("click", function() {
//     alert("I was clicked");
// });

// Arrow function in javascript
// summ = (a, b) => {
//     return a + b;
// }

// SetTimeOut and SetInterval
login = () => {
    document.querySelector("h1").innerHTML = "<b>JavaScript all concept in one code</b>";
    console.log("User logined");
}
// setTimeout(login, 2000);
// clr = setInterval(login, 2000);
// clearInterval(clr);
// use clear interval(clr)/clarTimeout(clr) to cance setInterval/setTimeout

// Javascript localStorage
// localStorage.setItem("name", "Abhishek");
// localStorage.getItem("name");
// localStorage.clear();
// console.log(localStorage);

// Json
// obj = {name: "Abhishek", length: 1, a: {this: "that"}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// json.parse remain rest i will see this topic in next tutorial


