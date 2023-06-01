
let sbiBank = {
    bankName: "SBI Bank",
    location: "State Bank Of India, Amravati",
    accountNo:6197198127,
    ifscCode:"SBIIN0012712",
    interestRate:"7.10%",
    showDetails: function(){
        console.log(`BankName: ${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo}, IFSC Code: ${this.ifscCode}, Rateof Interest:${this.interestRate}`);
    }
}
sbiBank.showDetails()

console.log("");

let axisBank = {
    bankName: "Axis Bank",
    location: "Gr Flr Neelam Hotel & Food Product,Badnera Road, Rajapeth,Amravati",
    accountNo:178974956,
    ifscCode:"UTIB002036",
    interestRate:"7.85%",
    showDetails: function(){
        console.log(`BankName: ${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo},IFSC Code: ${this.ifscCode}, Rateof Interest: ${this.interestRate}`);
    }
}
axisBank.showDetails()

console.log("");

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Shop No1 Diamond Market Jaistamb Chowk Amravati",
    accountNo:587870309,
    ifscCode:"HDFC0002982",
    interestRate:"6.60%",

    showDetails: function(){
        console.log(`BankName: ${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo},IFSC Code: ${this.ifscCode}, Rateof Interest: ${this.interestRate}`);
    }
}
hdfcBank.showDetails()

console.log("");

let yesBank = {
    bankName: "YES Bank",
    location: "Irvin Square, Camp Road, Amravati",
    accountNo:5878703,
    ifscCode:"YESB0ADB001",
    interestRate:"3.25 - 7.75%",
    showDetails: function(){
        console.log(`BankName: ${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo},IFSC Code: ${this.ifscCode}, Rateof Interest: ${this.interestRate}`);
    }
}
yesBank.showDetails()
