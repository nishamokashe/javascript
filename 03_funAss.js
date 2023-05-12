console.log("We Ues any two function with no arguments and no return type");
console.log("");

function fullName() {

}
fullName();
var firstName = "Nisha";
var lastName = "Mokashe";
var collegeName = "DCPE, HVPM, Amravati";
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("College Name:", collegeName);
console.log("");



function swapValuesDued(argOne, argTwo){
console.log("Before Swap: ", argOne, argTwo);
var temp = argOne;
argOne = argTwo;
argTwo = temp;
console.log("After Swap: ", argOne, argTwo);
}
    
swapValuesDued("Virat", "Anushka");
swapValuesDued(1000, 2000);
console.log("");

function addThreeValues(a, b, c) {
    var result = a+b+c;
    console.log("Addtion is:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");