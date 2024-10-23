const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

// step1
xhr.open('GET', URL);

console.log(xhr.readyState);

xhr.onreadystatechange = function() {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    // console.log(typeof xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(typeof data);
  }
}

// step2
xhr.send();
