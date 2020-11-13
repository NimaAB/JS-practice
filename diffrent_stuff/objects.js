//example of a js object: 
const person = {
    firstName: 'Nima',
    lastName: 'Bewrani',
    age: 22, 
    hobbies: ['Learning','Reading','Programing','Swimming','Workout','Ski','Sycling'],
    address:{
        gate: 'Osloveien 10',
        poststed:'Oslo',
        postNr: 1010
    }
}

//adding properties to the object: 
person.tlfNr = '12345678';

//teking out some values from the person object: (destructuring)
const {firstName,lastName} = person;


// teking out the first element of the hobbies from person: 
const hobby1 = person.hobbies[0]; 

//taking out values from address object within person: 
const postNr_1 = person.address.postNr; 
const {gate,postNr} = person.address; 


// Array of objects:
const todoList_1 = [
    {
        id:1,
        text: 'home work',
        isDone: true
    },
    {
        id:2,
        text: 'workout',
        isDone: false
    },
    {
        id:3,
        text: 'meditation',
        isDone: true
    },
    {
        id:4,
        text: 'working on javascript',
        isDone: true
    },
];

//getting the text from second object in todoList arrays: 

const text2 = todoList_1[1].text;

//converting the list of objects to a json format: 
const todosAsJSON = JSON.stringify(todoList_1);

