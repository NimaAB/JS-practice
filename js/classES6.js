//Class notation in ES6: 

class Person {
    constructor (firstName,lastName,dOBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dOBirth = new Date(dOBirth);//built in class.
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }

    getBirthYear(){
        return this.dOBirth.getFullYear();
    }
}