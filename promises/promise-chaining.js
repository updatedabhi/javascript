/*
// Basic of understanding Promise static method like resolve and reject 


const condition = false;

const myPromise = condition
  ? Promise.resolve(5)
  : Promise.reject('nothing is here');

myPromise
  .then((data) => {
    console.log(typeof data);  // This will be `number` if resolved
    console.log(data);         // This will be `5` if resolved
  })
  .catch((rejectedData) => {
    console.log(rejectedData); // This will be `'nothing is here'` if rejected
  });

  */


function myPromise() {
  return new Promise((resolve, reject) => {
    resolve('foo');
  })
}

myPromise().then(value => {
  console.log(value);
  value += 'bar';
  // return Promise.resolve(value);
  return value;
}).then(value => {
  console.log(value);
  value += 'baaz';
  return value;
}).then(value => {
  console.log(value);
})