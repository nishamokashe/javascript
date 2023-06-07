
const arrayNumber = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayGreaterThan50 = arrayNumber.filter((element)=>{
   return element >=50
})
console.log("step:1. Find out all the numbers which are greater than 50 and log on console");
console.log(`Given array is: ${arrayNumber}`);
console.log(arrayGreaterThan50);

const arrayEven = arrayNumber.filter((element)=>{
    return element %2===0;
})
console.log("step:2. Find out all even numbers and log on console");
console.log(arrayEven);

const arrayOdd = arrayNumber.filter((element)=>{
    return element%2!==0;
})
console.log("step:3. Find out all odd numbers and log on console");
console.log(arrayOdd);

const arrayMultiple1 = arrayNumber.filter((element)=>{
    return element%5==0;
})
console.log("step:4. Find out all the numbers which are multiple of 5");
console.log(arrayMultiple1);

const arrayFindNumber = arrayNumber.filter((element)=>{
    return element<=50 && element>=20
    
})
console.log("step:. Find numbers between 20-50 and log on console ");
console.log(arrayFindNumber);





