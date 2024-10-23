const intervalId = setInterval(name => console.log(name), 1000, "Yamada");
console.log(intervalId);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);