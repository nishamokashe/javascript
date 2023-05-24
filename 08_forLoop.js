

for (let index = 0; index <= 10; index++) { // index = 11
   // console.log(index); // 0 1  2 ... 10 
}
//console.log("After loop");

//console.log("----------------------------------------------------");


// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
   // console.log(index); // 0 1  2 ... 10 
}
//console.log("After loop");

console.log("----------------------------------------------------");


for (let index = 100; index >=80; index=index-1) { // index = 11
    //console.log(index); // 0 1  2 ... 10 
}
 //console.log("After loop");

for (let index = 17; index <=170; index=index=17) { // index = 11
    //console.log(index); // 0 1  2 ... 10 
}
//console.log("After loop");

for (let index = 190; index >=19; index=index-19) {
    //console.log(index);
    
}

for (let Index=8; Index<=80; Index= Index+8) { 
    //console.log(Index); // 0 1  2 ... 10 
}
//console.log("After loop");


// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) { // index = 9  8 
    var char = str.charAt(index);
    reverseString = reverseString.concat(char); 
}
console.log(reverseString);
