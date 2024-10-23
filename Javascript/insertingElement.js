let container = document.querySelector(".container");

// let paragraph = document.getElementById("description");

let newElement = document.createElement("div");

newElement.className = "editable-box";

newElement.innerText = "Abhishek is a good boy and he is kind and helful person."

// container.insertBefore(newElement, paragraph);

document.querySelector("body").insertBefore(newElement, container);