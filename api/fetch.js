const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatisthis = fetch(URL);

// console.log(whatisthis)

/* 
fetch(URL).then(response => {
  console.log('then')
  console.log(response)
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
})
.then(value => {
  console.log(value)
})
.catch(err => {
  console.log('inside catch')
  console.log(err)
})
*/

fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => {
  console.log('then')
  console.log(response)
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
})
.then(value => {
  console.log(value)
})
.catch(err => {
  console.log('inside catch')
  console.log(err)
})





