
//calculator functionality:
import {Calculator} from './Calculator.js';
//selecting the elements: 
//numbers
const numbers = document.querySelectorAll('[data-number]'); 
//operands
const operands = document.querySelectorAll('[data-operand]');
//clear
const clearBtn = document.querySelector('[data-clear]');
//clear all
const clearAllBtn = document.querySelector('[data-clear-all]');
//equal 
const equal = document.querySelector('[data-equal]');
//outputs
const prevContent = document.querySelector('.prevOutput');
const curContent = document.querySelector('.curOutput');

const calc = new Calculator(prevContent,curContent,curContent,prevContent);

numbers.forEach(numBtn => {
    numBtn.addEventListener('click',()=> {
        const num = numBtn.innerText;
        calc.appendNumber(num);
        calc.updateDisplay();
        
    });
});
operands.forEach(operand => {
    operand.addEventListener('click',()=> {
        const oper = operand.innerText;
        calc.choosOperation(oper);
        calc.updateDisplay();
    });
});

clearAllBtn.addEventListener('click',()=>{
    calc.clearAll();
    calc.updateDisplay();
})

equal.addEventListener('click',()=>{
    try{
        calc.calulate();
        calc.updateDisplay();
    }
    catch(e){
        curContent.innerText = e;
    }
})

clearBtn.addEventListener('click',()=>{
    calc.clear();
    calc.updateDisplay();
})


//night mode:
const toggle = document.querySelector('#switch');
toggle.addEventListener('change',()=>{
    transition();
    if(toggle.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        
        document.documentElement.setAttribute('data-theme','light');
    }
})
const transition = ()=>{
    document.documentElement.classList.add('transition');
    window.setTimeout(()=>{
        document.documentElement.classList.remove('transition');
    },1000);

}