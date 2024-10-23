/* 
console.log("Abhishek");

// use of callback

setTimeout(()=> {
  console.log("Abhishek");
}, 5000);



function updateData(data) {
  console.log(data + "is being update");
}

function deleteData(data) {
  console.log(data + "is being deleted");
}

function process(callback) {
  callback("Abhishek");
}

process(updateData);
*/

// callback Hell

// code with real life example 

function study(callback) {
  setTimeout(() => {
    console.log("studying done");
    callback()
  }, 3000);
}

function cooking(callback) {
  setTimeout(() => {
    console.log("cooking done");
    callback()
  }, 6000);
}

function sleeping(callback) {
  setTimeout(() => {
    console.log("sleeping done");
    callback()
  }, 2000);
}

function singing(callback) {
  setTimeout(() => {
    console.log("singing done");
    callback()
  }, 8000);
}


study(()=> {
  cooking(()=> {
    sleeping(()=> {
      singing(()=> console.log("All task is done"))
    })
  })
})



