const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

sendRequest("GET", URL).then(response => {
  const data = JSON.parse(response);
  return data;
}).then(data => {
  if (data.length > 3) {
    const id = data[3].id;
    console.log(id);
    return id;
  } else {
    throw new Error("Array does not have 4 elements");
  }
}).then(id => {
  const newURL = `${URL}/${id}`;
  console.log(newURL);
  return sendRequest("GET", newURL);
}).then(newResponse => {
  const newData = JSON.parse(newResponse);
  console.log(newData.body);
}).catch(err => {
  console.log(err.message);
});
