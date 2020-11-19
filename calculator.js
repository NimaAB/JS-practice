
//import * as math from './utils.js'

//output section: 
const asked = document.querySelector('.asked');
console.log(asked.textContent) //geting the content.
const content = asked.textContent; //should be parsed to number.  

//operation btns:
const plus = document.querySelector('.add');
const minus = document.querySelector('.sub');
const mulitply = document.querySelector('.mulitply');
const div = document.querySelector('.div');
//all btns: 
const btns = document.querySelectorAll('.btn')

//writnig to asked:
let text = ""; 
let numbers = []; 
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        text += btn.textContent;
        asked.innerHTML = `${text}`;
        numbers = text.split('');
        console.log(numbers);
    });
});
