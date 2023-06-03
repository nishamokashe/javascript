
console.log(`------------Step 1: shallow clone -----------`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
const newArray = arrayNums;
console.log(arrayNums);
console.log(`----update cloned array with values 55, 66 using push()`);
arrayNums.push(55, 66);
console.log(arrayNums);

console.log("");

console.log(`----Step 2: Deep cloning using spread Operater, Update cloned array with values 10, 25----`);

const clonedArray = [...newArray];
clonedArray.splice(2, 0, 100, 200);
console.log(newArray);
console.log(clonedArray);

console.log(`----Step 3: Marge or concate array with Using Speard Operater----`);
 const arrayEven = [2, 30, 14, 8]
 const array1 = arrayNums.concat(arrayEven);
 console.log(arrayNums);
 console.log(array1);

 console.log(`----------Step 4: Create the employee_info----------- `);

const employee_info ={
    emp_name: "John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality:{
            colony: "Om Virndavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32","+91- 9096 5678 77"]
} 

//  console.log(employee_info.address.city.country);
console.log("A)");
console.log(`{Address: {...},City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country}}`);

console.log("B)");
console.log(`[Mobiles: ${employee_info.mobiles}]`);

console.log("------Step. 6: Perform deep copy using JSON.stringfy()---------");
console.log("------------Update proprty 'july_month'---------");
console.log("A)");
console.log(`july_month: ${employee_info.salary.july_month}, aug_month: ${employee_info.salary.aug_month} jun_month: ${employee_info.salary.jun_month}`);

const deepClonedPerson = JSON.parse(JSON.stringify(employee_info));
employee_info.salary.july_month = "80,0000INR";
console.log(`{Update Salary --> july_month: ${employee_info.salary.july_month}}`);

console.log("------------Update proprty 'country'---------");
console.log("B)");
console.log(`{Address: {...}, City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country}}`);
employee_info.address.country = "United Kingdom";
console.log(`Update Country --> Country: ${employee_info.address.country}`);

console.log("------------Update values for original---------");
console.log("c)");
console.log(`Orignal to Update values:,${employee_info.salary.july_month} , ${employee_info.address.country}`);


