
console.log("Q.1.");
console.log(`Invoking the function for vale "JavaScript"`);
function squareOfWordLength(str){
    var greet = "JavaScript";
var greetLength = greet.length;
console.log(`Total number of character in given string is: ${greetLength}`);
var result =greet.length*greet.length;
console.log("Square of its Length is:",result);

}
squareOfWordLength("JavaScript")
console.log(`------------------------------------------------------`);

console.log(`Invoking the function for vale "Google Chrome"`);
function squareOfWord(str){
    var greet = "Google Chrome";
var greetLength = greet.length;
console.log(`Total number of character in given string is: ${greetLength}`);
var result =greet.length*greet.length;
console.log("Square of its Length is:",result);
}
squareOfWord("Google Chrome");
console.log(`-------------------------------------------------------`);

console.log(`Invoking the function for vale "Developer Smart"`);
function squareOfWordLen(str){
    var greet = "Developer Smart";
var greetLength = greet.length;
console.log(`Total number of character in given string is: ${greetLength}`);
var result =greet.length*greet.length;
console.log("Square of its Length is:",result);

}
squareOfWordLen("Developer Smart");
console.log(`-------------------------------------------------------`);
console.log("");

function stringLengthIs(){
    console.log("Q.2.");
    console.log("The given string is : I am Angular Developer");
    var greet = "I am Angular Developer";
    var stringLength = greet.length;
    console.log("The length of string is: ", stringLength);
    var resultSplit = greet.split(" ");
    console.log(`Total number of words avilable in that string is: ${resultSplit.length}`);
    var result = greet.length/resultSplit.length;
    console.log(`The string length is multiplyed by total number of words available in that string is:${result}`); 

    console.log("");

    var greet = "I am Angular Developer";
    var stringLength = greet.length;
    console.log("The length of string is: ", stringLength);
    var resultSplit = greet.split(" ");
    console.log(`Total number of words avilable in that string is: ${resultSplit.length}`);
    var result = greet.length*resultSplit.length;
    console.log(`The string length is divided by total number of words available in that string is:${result}`); 

}
stringLengthIs("I am Angular Developer");
