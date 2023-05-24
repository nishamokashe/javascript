
function factorialNum(num){
     if (num==0) {
        console.log(`Factorial of zero is 1`);
        return;
        
     } else {
        if (num==undefined || num==null) {
            console.log(`Invalid data: ${num}`);
        }
     }
    let factorial = 1;
    for (let index = num; index >= 1; index--) { 
        factorial = factorial * index;     
 }
 return factorial;
}
let factOf5 = factorialNum(5);
console.log(`Factorial of 5 is: ${factOf5}`);

let factOf3 = factorialNum(3);
console.log(`Factorial of 3 is: ${factOf3}`);

factorialNum(undefined)

let factOf8 = factorialNum(8);
console.log(`Factorial of 8 is: ${factOf8}`);

factorialNum(null);

let factOf9 = factorialNum(9);
console.log(`Factorial of 9 is: ${factOf9}`);

factorialNum(0);
