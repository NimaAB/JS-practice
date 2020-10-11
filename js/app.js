
//loading segmensts to index.html:
const writeSection = (name,element,path)=>{
  const section = document.querySelector(element);
  section.innerHTML = load(name,path);
}

const load =function(name,path){
  let file = new File([{name}],path,{
    type:'html',
  });
  let fr = new FileReader(); 
  fr.readAsBinaryString(file);
  console.log(fr)
  return fr.result.toString; 
}
console.log(load('/html/sec/footer.txt'));
const app = () => {
  //navFunc();
  writeSection('header','.header-place','/html/sec/header.html');
  writeSection('footer','.footer-place','/html/sec/footer.html');
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
