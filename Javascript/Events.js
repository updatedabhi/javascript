let heading = document.querySelector(".big-heading");

heading.addEventListener("click", (event) => {

    document.querySelector(".big-heading").innerHTML = "<b>Abhishek is awesome</b>";
    console.log(event);
    console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.classList[2]);
    console.log(event.offsetX);
    if (event.offsetX < 1000) {
        document.querySelector(".header").style.color = "red";
    } else {
        document.querySelector(".header").style.color = "yellow";
    }

});

let container = document.querySelector(".container");

container.addEventListener("mouseover", () => {

    document.querySelector(".container").style.backgroundColor = "orange";

});

let button = document.querySelector(".btn");

button.addEventListener("click", () => {

    document.querySelector("span").style.display = "block";

});

let submitButton = document.querySelector(".submitbtn");

submitButton.addEventListener("click", (event) => {

    console.log("Thank you");
    event.preventDefault();

});

let image = document.querySelector("img");

// image.addEventListener("dblclick", ()=>{

//     location.href = "https://www.flipkart.com";

// });

image.addEventListener("mousedown", handleMouseDown);

function handleMouseDown() {

    alert("Mouse is down");

}

let body = document.querySelector("body");

body.addEventListener("mouseenter", handleMouseEnter);
body.addEventListener("mousemove", handleMouseMove);

function handleMouseEnter() {

    document.querySelector("body").style.backgroundColor = "hotpink";

}

function handleMouseMove(event) {

    console.log(event.offsetX);

}

let form = document.querySelector("form");

form.addEventListener("mouseleave", function() {

    document.querySelector(".form-container").style.border = "2px solid black";

});