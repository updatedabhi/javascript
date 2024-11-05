const URL = "https://dog.ceo/api/breeds/image/random";

/*

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = xhr.response;
    const data = JSON.parse(response);
    const image = data.message;
    console.log(image);
  } else {
    console.log("Error in getting data");
  }
};

xhr.onerror = () => {
  console.log("Network error");
};

xhr.send();


// using fetch
fetch(URL)
.then((response) => response.json())
.then((data) => console.log(data.message))
.catch((err) => console.log(err.message));

*/

// using async and await

const fetchData = async () => {
  try {
    const respnose = await fetch(URL);
    const data = await respnose.json();
    console.log(data.message);
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
