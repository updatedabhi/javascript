localStorage.setItem("name1", "Abhishek");

localStorage.setItem("name2", "Pramod");

localStorage.setItem("age1", 19);

localStorage.setItem("age2", 20);

localStorage.clear();

// localStorage.removeItem("name1");

console.log(localStorage.getItem("name1"));

let imporatnArray = ["Tomato", "Pea", "Garlic", "Potato"];

localStorage.setItem("Vegetable", JSON.stringify(imporatnArray));

let studentMarks = {
    science: 99,
    Math: 89,
    Social: 54,
    English: 78,
    Computer: 100
}

localStorage.setItem("examResult", JSON.stringify(studentMarks));

JSON.parse(localStorage.getItem("examResult"));

sessionStorage.setItem("fruit1", "Banana");

sessionStorage.setItem("fruit2", "Mango");

let cityName = ["Patna", "Mumbai", "Banglore", "Delhi"];

// sessionStorage.setItem("city", cityName);

sessionStorage.clear();

JSON.stringify(sessionStorage.getItem("city"));

