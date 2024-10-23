const timeOutId = setTimeout(name => console.log(name), 3000, "Abhishek");
clearTimeout(timeOutId);
console.log(timeOutId);