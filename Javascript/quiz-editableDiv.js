let divElement = document.createElement("div");

divElement.className = "my-div-containier";

divElement.innerText = "Editable text for you..."

console.log(divElement);

document.querySelector(".editable-box").appendChild(divElement);

divElement.addEventListener("click", ()=> {

    document.querySelector(".editable-box").innerHTML = "<textarea>Editable text for you...</textarea>";
    localStorage.setItem("myWrittenText", document.querySelector(".editable-box").innerHTML = "<textarea>Editable text for you...</textarea>");

});

