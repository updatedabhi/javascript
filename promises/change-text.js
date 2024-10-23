const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.innerHTML = text;
        element.style.color = color;
        resolve();
      } else {
        reject('Element not found');
      }
    }, time);
  });
}

changeText(heading1, "Abhishek", "green", 2000)
  .then(() => changeText(heading2, "Kumar", "red", 2000))
  .then(() => changeText(heading3, "Gupta", "blue", 2000))
  .then(() => changeText(heading4, "Developer", "orange", 2000))
  .then(() => changeText(heading5, "Student", "purple", 2000))
  .then(() => changeText(heading6, "Designer", "pink", 2000))
  .then(() => changeText(heading7, "Freelancer", "yellow", 2000))
  .then(() => changeText(heading8, "Coder", "brown", 2000))
  .then(() => changeText(heading9, "Programmer", "black", 2000))
  .then(() => changeText(heading10, "Engineer", "gray", 2000))
  .catch(err => alert(err));

