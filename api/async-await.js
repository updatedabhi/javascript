const URL = "https://jsonplaceholder.typicode.com/poosts";

async function getPost() {
  try {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Error");
  }
  const data = await response.json();
  console.log(data);
} catch(err) {
  console.log("inside cathch")
  console.log(err)
}
}

// getPost();

// fetch(URL)
// .then(response => response.json())
// .then(data => console.log(data))

const func = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log("inside timeout");
      resolve();
    }, 3000);
  });
};

func();
console.log("Aage age dekho hota kya hai");


const fun2 = ()=> {
  setTimeout(()=> {
    console.log("inside timeout2")
  }, 3000)
}

fun2();
console.log('Hello ji kya haal chall');