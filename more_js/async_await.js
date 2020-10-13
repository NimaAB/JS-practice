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

async function init(){
    await creatPost({id:3,title:'post three',body:'Hello again!'});

    getPost(); 
}
init();

//async await with fetch: 
async function fetchUsers(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users'); 

    const data = await res.json(); 

    console.log(data);
}
fetchUsers();