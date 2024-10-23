function MyFriends(name, age, city) {

    this.myFriendName = name;

    this.myFriendAge = age;

    this. myFriendCity = city;

    this.activity = function() {

        console.log(`${name} is awesome`);

    }

}

myFriend1 = new MyFriends("Abhishek", 19, "Araria");

console.log(myFriend1);

myFriend2 = new MyFriends("Ramu", 45, "Lucknow");

console.log(myFriend2);

myFriend3 = new MyFriends("Bunty", 56, "Bomby");

function Constructor(home) {

    this.Home = home;

}

yourHome = new Constructor("Mars");

console.log(yourHome);