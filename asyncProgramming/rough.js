function greet() {
  return "Good morning";
}

function myFunc(name, callback) {
  callback();
}

myFunc("John", function() {
  console.log(greet() + name) ;
});

