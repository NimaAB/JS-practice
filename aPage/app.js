const icon = document.querySelector(".trigger");
const tElements = document.querySelector(".top");
const meny = document.querySelector("header");

icon.addEventListener("click", function () {
  console.log("2");
    tElements.style.display = "none";
    meny.style.top=0;
});
