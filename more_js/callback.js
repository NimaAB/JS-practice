import {posts} from './data.js'


/* 
this function gets posts from the data.js via the import, 
and makes an li element and appends it to the body element. 
*/
function getPost(){
    setTimeout(()=>{
        let output = ''; 
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        }); 
        document.body.innerHTML = output;
    },1000);
}

/**
 * this method creates a new post object, but it's waiting 2 sec.
 * If we didn't have @callback which is a method name, then we wouldn't 
 * be able to the thierd post.
*/
function creatPost(post,callback){
     setTimeout(()=>{ 
        posts.push(post);
        //calling the callback function after the post has been
        //created and pushed to the posts array. 
        callback(); 
    },2000);
}

//her we execute the createPost and passing in an object of post and the name of function: 
creatPost({id:3,title:'post three',body:'Hello again!'},getPost);