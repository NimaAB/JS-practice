// A list of objects: 
const todoList = [
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
  
const texts = []; // stores the texts
//for-loop: 
for(let i = 0; i<todoList.length;++i){
    texts.push(todoList[i].text); 
}

const id = []; //stores the ids 
//while loop:
let i =0;  
while(i<todoList.length){
    id.push(todoList[i].id)
    i++; 
}

const complited=[]; //stores the booleans
// foreach loop: 
for(let el of todoList){
    complited.push(el.isDone)
}

//map: 
const todoText = todoList.map(function(todo){
    return todo.text; 
}); 

//filter: it will return an array of objects which has isDone === true. 
const complitedTodos = todoList.filter(function(todo){
    return todo.isDone === true; 
});

//we can make it return only the text of the complited todos by using map(): 
const complitedTodosText = complitedTodos.map((todo)=>todo.text);
