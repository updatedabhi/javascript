URL = "https://dog.ceo/api/breeds/image/random";

console.log("Hello");

fetch(URL)
  .then((respnose) => respnose.json())
  .then((data) => console.log(data));
