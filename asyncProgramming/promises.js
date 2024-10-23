const Mypromise1 = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    resolve("I am good boy");
  }, 6000)
});

const age = 4
const Mypromise2 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    age > 23 ? resolve("You can drive ") : reject("you can't drive");
  }, 3000);
})

Mypromise2.then(value => {console.log(value); return Mypromise2.catch(
  value => console.log(value)
)})
