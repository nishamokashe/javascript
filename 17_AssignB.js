
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny= new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log("Add all create emp Object");
console.log(" step 1. Find all employees working in TCS ");

const array = [emp_anil, emp_rishi, emp_viny, emp_sonali, emp_monika, emp_radha, emp_mahi ]
    for(const employee of array){
        if (employee.emp_company == "TCS") {
          console.log(employee.emp_name);  
        }
    }
  console.log("____________________________________________________________________________");

    console.log('step 2. Find Finance department employee');
    for (const employee of array) {
        if (employee.emp_dept =="Finance") {
            console.log(employee.emp_dept, employee.emp_name);
           
        }    
    }
    
    console.log("____________________________________________________________________________");

    console.log('step 3. Find employees whose name starts with "R" and employee details');
    for (const employee of array) {
        if (employee.emp_name.startsWith("R")) {
            console.log(employee.emp_id, employee.emp_name, employee.emp_dept, employee.emp_salary, employee.emp_company);
           
        }    
    }
    
    console.log("____________________________________________________________________________");

    console.log('step 4. Find employees whose salary is greater than 75000');
    for (const employee of array) {
        if (employee.emp_salary>75000) {
            console.log(employee.emp_name, employee.emp_company, employee.emp_salary);
           
        }    
    }
    
    console.log("____________________________________________________________________________");

    console.log('step 5. Find employees whose salary is greater than equal to 50000');
    for (const employee of array) {
        if (employee.emp_salary>=50000 && employee.emp_dept =="IT") {
            console.log(employee.emp_id, employee.emp_name, employee.emp_dept, employee.emp_salary,  employee.emp_company,);
           
        }    
    }
