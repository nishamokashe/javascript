

function fabonicciSerices(num){
    let fabonicci = 0 , index = 1 , result;
    for (let index = 1; index < num; index++) { 
        result = fabonicci + index;
        console.log(result);
        fabonicci = index;
        index = fabonicci;
 }
}
fabonicciSerices(15);
