//defining functions: 
let double = function(number){
    return number*2;
}
//or:
function double1(number){
    return number*2;
}

//function arrow:
    // those square methods taking in parameters.
let square = (x) => {
    return x*x; 
};
let square1  = x => x*x;
    
    //no parameters:
let grett = () => {
    consol.log("Hello World!");
};

//Optional parameters:
//if we don't give a value to pow parameter, then it will be 2 by defaulte. 
function power(base,pow=2){
    let ans = 1;
    for(let i = 0;i<pow;++i){
        ans *= base;
    }
    return ans; 
}
