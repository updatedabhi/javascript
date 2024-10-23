/*
let todayTime = new Date();

console.log(todayTime);

let otherTime = new Date("month date year");

otherTime = new Date("jan 12 2022 12:00:07");

console.log(otherTime);

console.log(otherTime.getDate());

console.log(otherTime.getSeconds());

otherTime.setDate(4);

console.log(otherTime);
*/

//Random program on the basis of time object concept.

let todayDateAndTime = new Date();

let timeHour = todayDateAndTime.getHours();

console.log(todayDateAndTime);

if (timeHour < 12 && timeHour > 0) {

    alert("Good Morning User..");

} else if (timeHour > 12) {

    alert("Good Afternoon User..");

} else {

    alert("Good Evening User..");

}