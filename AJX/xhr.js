URL = "https://dog.ceo/api/breeds/image/randomo";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data.message);
  } else {
    console.log("404 not found");
  }
};

// it will only handle network error
xhr.onerror = () => {
  console.log("Something went wrong");
};

xhr.send();
