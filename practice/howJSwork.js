// Hoisting is the behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope (global or function scope) during the creation phase of the execution context. This happens before any code is executed.

console.log(a)
var a = 10;
console.log(a)
abc()

function abc() {
  console.log(a);
  var a = 9;
  console.log(a)
}
