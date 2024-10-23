let arr = [3, 5, 2, 1, 9];
/*
// Traditional way

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in loop
for (let i in arr) {
  console.log(arr[i]);
  if (i == 2) {
    break;
  }
}

// for of loop
for(let a of arr) {
  console.log(a)
}

// foreach loop
arr.forEach(value => console.log(value))

// map function
a = arr.map(value => value);
console.log(a)

// filter method
a = arr.filter(value => value)
console.log(a)

// rducce method
arr.reduce((accumulator, value) => console.log(accumulator, value))

// find method
a = arr.find(value => value == 3);
console.log(a)

// some method
arr.some((value, index, arr)=> {
  console.log(value, index, arr)
  if (index == 2) {
    return true;
  }
})
*/

// arr.forEach((value, index, arr)=> {
//   console.log(value + " " + index + " " + "[" + arr + "]")
// })

for (let [index, value] of arr.entries()) {
  console.log(index, value)
}

