class Calculator{
    constructor(prevContent,curContent,curDisplay,prevDisplay){
        this.curDisplay = curDisplay;
        this.prevDisplay = prevDisplay;
        this.prevContent = prevContent; 
        this.curContent = curContent;
        this.clearAll();
    }
    clearAll(){
        this.prevContent = '';
        this.curContent = '';
        this.operation = undefined;
    }
    clear(){
        this.curContent = this.curContent.toString().slice(0,-1);
    }
    calulate(){
        let result; 
        const prevNum = parseFloat(this.prevContent);
        const curNum = parseFloat(this.curContent);
        if(isNaN(curNum)||isNaN(prevNum)) {
            return; 
        }
        if(this.operation === '/' && prevNum === 0){
            throw 'undefined'; 
        }
        switch (this.operation){
            case '+': result = prevNum + curNum; break; 
            case '-': result = prevNum - curNum; break;
            case '*': result = prevNum * curNum; break; 
            case '/': result = prevNum/curNum; break; 
            default: return; 
        }
        this.curContent = result; 
        this.operation = undefined; 
        this.prevContent = '';
    } 
    appendNumber(number){
        if(number==='.' && this.curContent.includes('.')){
            return;
        }
        this.curContent = this.curContent.toString() + number.toString(); 
    }
    choosOperation(operation){
        if(this.curContent===''){
            return;
        }
        if(this.prevContent!==''){
            this.calulate();
        }
        this.operation = operation;
        this.prevContent = this.curContent; 
        this.curContent = '';
    }
    updateDisplay(){
        this.curDisplay.innerText = this.curContent;
        if(this.operation!=null){
            this.prevDisplay.innerText = `${this.prevContent} ${this.operation}`;
        }else{
            this.prevDisplay.innerText = this.prevContent;
        }
    }
}
export {Calculator};