
//loading segmensts to index.html:
const writeSection = (element,path)=>{
  const section = document.querySelector(element);
  section.innerHTML = load(path);
}

const load =function(path){
  //let fs = require('fs')
  let fr = new FileReader();

  try{
    fr.readAsBinaryString(path);
    
  }catch (e){
    e;
  }
  return fr.result;
}
console.log(load('/html/sec/footer.html'));
const app = () => {
  //navFunc();
  writeSection('.header-place','/html/sec/header.html');
  writeSection('.footer-place','/html/sec/footer.html');
}
app();







// const navFunc = ()=>{
//   const icon = document.querySelector(".trigger");
//   const tElements = document.querySelector(".top");
//   const meny = document.querySelector("header");

//   icon.addEventListener("click", function () {
//     tElements.style.display = "none";
//      meny.style.top=0;
//   });
// }
