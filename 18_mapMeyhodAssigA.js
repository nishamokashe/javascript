

const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 9];
console.log("====Step:1. Add the 10 into each element ===");
const num = 10;
const arrayTransfromed = [];
const arrayTrans = array.map( (element) => {
    return element+num;
} );
console.log(arrayTrans);

console.log("====Step:2. Square the each array element and log===");
const arrayTransfrom = array.map( (element) => {
    return element*element;
} );
console.log(arrayTransfrom);

console.log("====Step:1. Add the index value into it carresponding each array element and log===");
const arrayadd = array.map((element,index)=>{
    return element+index;
})
console.log(arrayadd);
