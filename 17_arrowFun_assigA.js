
console.log(`Step 1. Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`"Good Morning, Today is Monday"`);
}
display();

console.log("_______________________________________________________________");

console.log(`Step 2. Arrow function with 3 arguments and no return value perform the multiplication`);

let mult = (n1, n2, n3=1) => {
    var result = n1 * n2 * n3;
    console.log(`a. Multiplication is: ${result}`);
}
 var result = mult(5, 5, 2)
 var result = mult(10, 4);

console.log("_______________________________________________________________");

console.log("step 3. The addition with 5 args and return value");
let add = (num1, num2, num3, num4, num5) =>{
    let result1 = num1+num2+num3+num4+num5;
    return result1;
}
let result1 = add(100, 100, 200, 349, 756);
console.log(`a. Addition  is : ${result1}`);

let arrow_Fun = () => {
    console.log("b. I am", "learning", "ES6", `features`, "in depth");
}
arrow_Fun ();