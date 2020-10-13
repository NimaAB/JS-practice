import {posts} from './data.js'; 

function getPost(){
    setTimeout(()=>{
        let output = ''; 
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        }); 
        document.body.innerHTML = output;
    },1000);
}

function creatPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            posts.push(post);
            
            const errCheck = false; 
            if(!errCheck){
                resolve();
            }else{
                reject('Some exception is catched');
            }  
        },2000);
    });
}

creatPost({id:3,title:'post three',body:'Hello again!'})
.then(getPost)
.catch((error) => document.body.innerHTML = error); 


//Promise.all: usefull when we have many promises. 
const promise1 = Promise.resolve('Hello World');
const promise2 = 'Nima';
const promise3 = new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'Goodbye') 
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json()); 

Promise.all([promise1,promise2,promise3,promise4])
.then(values => console.log(values));
