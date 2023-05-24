


for (let index = 0; index <= 10; index++) {
console.log(`${index}`);
if (index == 5) {
    break;
}    

}
console.log(`End loop`);




var iteration = 0;
for (let index = 1; index <= 10; index++) {
    iteration = iteration+1;
    console.log(`Iteration Start ${iteration}`);
    console.log(`${index}`);
    if (index == 5) {
        continue;
    }    
    console.log(`Iteration End: ${iteration}`);
    }
    console.log(`End loop`);