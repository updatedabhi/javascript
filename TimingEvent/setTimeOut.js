// setTimeout is a function that schedules the execution of a callback function after a specified delay (measured in milliseconds).


setTimeout((a1, a2, a3) => {
  console.log(a1, a2, a3);
  console.log("Hello Bhai kya hal chal");
}, 10000, "Mai callback function ka laar hu.", "mai bhi", "aur mai bhi...");

setTimeout(name => console.log(`Hello Mr. ${name}`), 6000, "Yamada");