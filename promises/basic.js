const teaIngredients = ['Milk', 'Water', 'Tea Leaf', 'Sugar'];

const teaPromise = new Promise((resolve, reject) => {
  if (teaIngredients.includes('Tea Leaf')) {
    resolve('Tea is ready!');
  } else {
    reject('Tea is not ready something is missing!');
  }
})

teaPromise.then((data) => {
  console.log("come on brother,", data, "Let's have it.");
}
// ,(err)=> {
//   console.error(err);
// }
).catch(err=> console.log(err));