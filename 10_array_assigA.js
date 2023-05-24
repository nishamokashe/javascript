
const Fruits= ["Banana", "Orange", "Apple","Mango","water Melon"];
console.log(`Fruits : ${Fruits}`);

var fristIndexValue = Fruits[0];
console.log(`First element is: ${fristIndexValue}`);

var lastIndexValue = Fruits[4];
console.log(`Last element is: ${lastIndexValue}`);

var fruits = ["Banana", "Orange", "Apple", "Mango", "water Melon"];
fruits.unshift("Papaya");
console.log( fruits);

var fruits = ["Banana", "Orange", "Apple", "water melon", "Mango"];
fruits.pop();
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
fruits[fruits.length] = "Pineapple";
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
fruits.splice(4, 0, "Dragon Fruits");
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];
fruits[1] = "kiwi";
console.log(fruits);




var fruits = ["Banana", "Orange", "Apple","Mango", "water Melon"];

fruits.splice(0, 2);
const lastElement = fruits[fruits.length-1];
// console.log(fruits.length);
console.log(fruits);






