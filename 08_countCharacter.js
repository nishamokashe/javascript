
function countCharA(word){    
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'A') {
        console.log(char);
        count++;
    }  
}
 return count;
}
let chara = countCharA("I AM Learning JavaScript, The Language of internate");
console.log(`charactr is: ${chara}`);
console.log("__________________________");
let charA = countCharA("My favourite movie is LAggAn");
console.log(`Total charactr is: ${charA}`);
