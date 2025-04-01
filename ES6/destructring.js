//array destructing

const animal = ["Dog", "Cat", "Cow"];

const [firstAnimal, ...restAnimal] = animal;
console.log(firstAnimal);
console.log(restAnimal);

// object destructring
const dog = {
  name: "Tommy",
  sound: "bho bho",
  age: 34,
  isCute: false,
  feedingRequirements: {
    food: "Chiken Bone",
    water: "Boil water",
  },
};

const {
  isCute,
  sound: animalSound,
  owner = "Abhishek",
  feedingRequirements: { food, water },
} = dog;
console.log(isCute);
console.log(animalSound);

// this is default value in this if it is not defined you can set by yourself
console.log(owner);

console.log(food);
console.log(water);

function useAnimal(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

const [animalName, sound] = useAnimal(dog);

console.log(animalName);
sound();
