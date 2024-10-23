URL = "https://dog.ceo/api/breeds/image/random";

async function makeRequest() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();
