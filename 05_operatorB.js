
console.log("Q.1.");
var greaterNumber = function(num1 , num2) {
   var result = num1>=num2 ? `${num1} Numbeer is greater` : `${num2} Number is greater`;
   console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log("");

console.log("Q.2.");
var isEvenOrOddNum = function(num){
 var result = num%2==0 ? true : false;
 return result;
}
var result = isEvenOrOddNum(29);
var res = (result==true) ? "29 Number is even":"29 is odd";
console.log(`${res}`);

 var result = isEvenOrOddNum(44);
var res = (result==true) ? "44 Number is even":"44 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = (result==true) ? "0 Number is even":"0 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(101);
var res = (result==true) ? "101 Number is even":"101 is odd";
console.log(`${res}`);

console.log("");
console.log("Q.3.");
var wordLength = function(word){
    var len = word.length;
    var result = len % 2==0 ? "EVEN":"ODD";
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(`JavaScript has ${returnValue}`);

var returnValue = wordLength("Developer");
console.log(`Developer has ${returnValue}`);

var returnValue = wordLength("Google");
console.log(`Google has ${returnValue}`);