// console.log(a);
// let a = 34;
// console.log(a)

// const a = [3, 5, 9, 0];
// const b = a;

// b.push(1);

// console.log(a);

// console.log(b);

// shallow copy
// const x = [3, 5, 0, 1];
// const y = Array.from(x);
// y.push(34);
// console.log(y);
// console.log(x);

// const p = [3, 8, 9, 0];
// const q = [...p];
// console.log(p);
// q.push(23);
// console.log(q);

// const m = [3, 2, 1];
// const n = m.slice();
// console.log(m);
// n.shift();
// n.unshift(892);
// console.log(n);

const xyz = {
  dish: "Matar paneer",
  singer: "Arjit singh",
  employee: {
    empName: "Abhishek",
    age: 34,
    role: "javascript",
    experience: 5,
    company: "google",
    abc: function () {
      console.log(this);
    },
  },
};
// xyz.employee.abc();

function foo() {
  console.log(this);
}
foo();

const moo = () => {
  console.log(this);
};

moo();
