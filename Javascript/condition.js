// if-else statement
/*
let age = prompt("Enter your age:");

if (age === 19) {
    storeValue = prompt("You can Vote. Enter Your choice:");
}

 else {
    console.log("You can't Vote");
}

alert("you have successfully voted " + storeValue);

// Ladder if-else statement

let myTime = prompt("What is Time?");

if (myTime < 5) {

    console.log("Good morning!");

}else if(myTime > 9) {

    console.log("Good Afternoon");

}else {

    alert("Good Evening");

}

let value = 34;

if(value !== undefined) {
    
    console.log("value is defined");
    
}else {
    
    console.log("value is not defined");
    
}


// ternary operator:
let firstNumber = 709;

console.log(firstNumber === 789? "number is correct" : "number is wrong");

let choiceNumber = 14;

switch (choiceNumber) {
    case 4:
        console.log("Your Entered number is " + choiceNumber);
        break;
        
        default:
            console.log("You have not entered any number");
            break;
            
        }
*/ 
      
let cooking = true;

let gender = prompt("Enter your Gender:");

let marriage = prompt("Are you marriage?");

if (cooking && gender == "male" || (marriage == "yes")) {

    console.log("your life will be awesome");

} else {
    console.log("May be you will have to face some problem in your life");
}