
console.log("");
console.log("Step 1:");
var maleMarriageEligibility = function(gender,age,boyName){
    var result = (gender=="Male", age>=21) ? `Hey ${boyName} you are eligible for marriage`:`Hey ${boyName}you are not eligible for marriage`;
    return result;
}
var returnValue = maleMarriageEligibility ("Male",25,"Billgates");
console.log(`${returnValue}`);

var returnValue = maleMarriageEligibility ("Male",17,"Stew Jobs");
console.log(`${returnValue}`);

console.log("");
console.log("Step 2:");
var femaleMarriageEligibility = function(gender,age,girlName){
    var result = (gender=="female", age>=18) ? `Hey ${girlName} you are eligible for marriage`:`Hey ${girlName}you are not eligible for marriage`;
    return result;
}
var returnValue = maleMarriageEligibility ("Female",16,"Jenifer");
console.log(`${returnValue}`);

var returnValue = maleMarriageEligibility ("Female",27,"Malinda Gates");
console.log(`${returnValue}`);
