/*
document.querySelector("button").addEventListener("click", function () {

    let heading = document.querySelector("h1");

    if (heading.style.color === "red") {
        heading.style.color = "purple";
    }

});


// Function concept.

function average(n1, n2) {

    return (n1 + n2) / 2;

}

yourMarks = average(23, 45);

myMarks = average(45, 68);

console.log(yourMarks, myMarks);

// While and Do While loop.

var arry = [1, 3, 5, 7, 9];

var i = 0;

while (i < arry.length) {
    
    console.log(arry[i]);
    i++;

}

var j = 0;

do {
    console.log(arry[j]);
    j++;
}
while (j < arry.length);

// Document object manipulation

var description = document.querySelectorAll("p")[1];

description.style.border = "2px solid red";

description.style.background = "yellow";

var header = document.querySelector("h1");

header.classList.add("text-design");

// header.classList.remove("text-design");

newDescription = document.createElement("p");

newDescription.innerText = "Abhishek is a good boy";

newDescription.style.background = "green";

newDescription.style.border = "2px solid black";


document.querySelector("body").appendChild(newDescription);
*/

let value = prompt("what is Your Name?");

function moriningGreet(value) {
    alert(`Good morning ${value}`);
}

moriningGreet(value);