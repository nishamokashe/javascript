
let professor={
  name:"Bharti",
  age:"22",
  gender:"female",
  subject:"computer science",
  college:"hvpm",
  degree : {
      engineering:"CSE",
      PHD:"adv Computing",
      diploma:"cyber security"
  },
  certificate:["Hacker Rank Participation", "IFE course", "Adv Programming"],
  value :function(){
      let degrees=`engineering: ${this.degree.engineering},
                      PHD: ${this.degree.PHD}, Diploma : ${this.degree.diploma}`;
      return degrees;
  }
};
console.log(`Type of  professor is ${typeof  professor}`);
console.log(`1. Think of all the properties that you could add(Add minimum 5 properties)  `);
console.log(`1.Name: ${professor.name}`);
console.log(`2.age: ${professor.age}`);
console.log(`3.gender: ${professor.gender}`);
console.log(`4.college: ${professor.college}`);
console.log(`5.subject: ${professor.subject}`);

console.log(" ");

console.log(`2. Also include nested object 'degress' like engineering: 'CSS', PHD: 'ADV computing' `);
console.log(professor.degree);
console.log(" ");


console.log(`3. Also add one array-->'Certificates' with his certificates like 'Hecker Rank Perticipation', 'Certificates in IFE Coures'... `);
console.log(professor.certificate);

console.log(" ");

console.log(` 4.Add the function as avalue which should concat all gegress in step2. please return as String and log on concole`);
let show=professor.value();
console.log(`total degrees are ==>${show}`);

console.log(" ");

console.log(`5. Try to add new property like totalExperience:"14 year" and log on console`);
professor.totalExperience="14 years";
console.log(`total Experience is : ${professor.totalExperience}`);

console.log(" ");

console.log(`6.Modify any existing property and log complete object on console`);
professor.age=35;
console.log(professor);

console.log(" ");

console.log(`7. Add one new certificate--> "Oracle Certified" at the end of arry-->certificates`);
professor.certificate.push("Oracle Cerificate");
console.log(professor.certificate);

console.log(" ");

console.log(`8. log the last element of the Array Certificate`);
let n=professor.certificate.length;
console.log(professor.certificate[n-1]);