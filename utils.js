
export const adding = (numbers) =>{
    let sum = 0;
    numbers.forEach(num => {
        sum += num
    });
    return sum;
}
export const subtraction = (numbers) => {
    let sub = numbers[0];
    for(let i = 1; i<numbers.length; ++i){
        sub -= numbers[i];
    }
    return sub;
}

export const multiplication = (numbers) =>{
    let res = 1;
    numbers.forEach(num => {
        res *= num
    });
    return res;
}

export const divition = (numb1, num2=1) =>{
    if(num2===0 || num2 == "0"){
        throw "Error: Divide by zero!"
    }
    return numb1/num2 ;
}

export {adding,subtraction,multiplication, divition}; 