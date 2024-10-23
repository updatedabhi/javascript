const btn = document.getElementById('btn');
const inputCity = document.getElementById('city');

btn.addEventListener('click', ()=> {
  const city = inputCity.value;
  console.log(city);
})