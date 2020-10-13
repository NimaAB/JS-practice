//Constructure function (ES5 notation): 
function Person(firstName,lastName,dOBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dOBirth = new Date(dOBirth);//built in class.
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`; 
}
Person.prototype.getBirthYear = function (){
    return this.dOBirth.getFullYear();
}

//Instantiating objects: 
const person1 = new Person('Nima','Bewrani','25-05-1998');
