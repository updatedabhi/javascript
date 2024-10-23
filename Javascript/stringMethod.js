let myString1 = "Abhishek";

let myString2 = "Kumar";

console.log(myString1 + " " + myString2);

let myString3 = "Abhishek is a good boy";

myString3 = myString3.concat(" and he is brave also");

myString3 = myString3.toUpperCase();

myString3 = myString3.length;

console.log(myString3);

let myString4 = "My favourite programming language is javaScript";

// myString4 = myString4.indexOf("programming");

// myString4 = myString4.endsWith("Abhishek");

// myString4 = myString4.charAt(5);

// myString4 = myString4.includes("Araria");

myString4 = myString4.substring(2, 6);

console.log(myString4);

let myString5 = "Why I am a sensitive boy?";

// myString5 = myString5.slice(4, 5);

// myString5 = myString5.split("a");

myString5 = myString5.replace("Why", "How");

console.log(myString5);

// Template literals.
let fruit1 = "Mango";

let fruit2 = "Apple";

let customer = `I want to buy ${fruit1} and ${fruit2}`;

customer = `Have you banana?
<h1>Store of ${fruit1} and ${fruit2}</h1>
<p>In this store we only sell ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = customer;

console.log(customer);