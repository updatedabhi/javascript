// for loop
/*
for(i = 0; i <= 100; i++) {

    console.log(i);

}

console.log("while loop");

let initialVariable = 0;
while(initialVariable < 10) {
    
    console.log(initialVariable);

    initialVariable++;
    
}

// do while loop:

let initialValue = 1;

do {
    
    console.log(initialValue);
    
    if(initialValue === 5) {
        initialValue++;
        // break;
        continue;
    }
    
    initialValue++;
    
} while (initialValue < 10);

let myArry = [4, 34, 43, 9, 34, 00];

myArry.forEach(function(element, index ,array) {
    
    console.log(element);
    
})

let myFriend = {
    name: "Pramod",
    age: 34,
    home: "Patna",
    skill: "Java programmer"
}

for(key in myFriend) {
    
    console.log(myFriend[key]);

}
*/

const arr = [3, 3, 5, 9, 2];

const newArr = arr.map(data => data + "th")

console.log(newArr)