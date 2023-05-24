 console.log("Q.1.");
var word = "I am Very good IT Developer";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
}
console.log(`Count total vowels: ${count}`);

console.log("______________________________________");
console.log("Q.1.");
//1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5
var sumOfQube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index;  //Ex. 1*1*1 = 1 , 2*2*2=8 ,... 5*5*5 = 125 // 1+8+27+64+125=225
        
    }
    console.log(`Sum of Qube of number is: ${sum}`);
}
sumOfQube(5);

console.log("______________________________________");
console.log("Q.3");
function oddPositionedChars(givenString){
    var str = "";
    for (let index = 0; index < givenString.length; index++){
        var char = givenString.charAt(index);
        if (index%2!=0 && char!=" "){
            str = str + char;
        } 
    }
    console.log(`${str}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ")