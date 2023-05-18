

function voteEligibility(age){
    if (age==null || age==undefined) {
           console.log(`Invalid data: ${age}` );
    } else {
        if (age==0 || age>120 || age==-10) {  
            console.log(`Invalid data: ${age}` );  
        } else {
            if (age<18) {
                console.log(`Not eligible for vote Age is: ${age}` );  
            } else {
                if (age>=18) {
                    console.log(`Eligible for vote Age is: ${age}` );  
                } else {
                    console.log(`Eligible for vote Age is: ${age}` );  
                } 
            } 
        }  
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);