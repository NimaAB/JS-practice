let x = 2; 
let y = 'name';

//'==' just compares the values.
if('2' == x){
    //true values are equal.
}
if('new' == y){ //false. values are not equal.
    
}




//'===' compares both the type of the variabels and the value. 
x=5;y=5;
if(5===5){
    console.log(`The type of x : ${x} and y:${y} are the same.`
    + 'And the values are equal too'); 
}
// or: 
if('2' === 2){
    console.log('hello');
}else{
    console.log('false! the value of 2 and 2 are equal, '+
     'but they are of to different types.')
}