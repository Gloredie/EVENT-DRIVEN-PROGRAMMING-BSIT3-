const box = document.getElementById("redBox");
const button1 = document.getElementById("button1");
const btn = document.getElementById("btn2")

button1.addEventListener("click", ()=>{
  box.style.backgroundColor = "red";
});
  btn.addEventListener("click", ()=>{
    box.style.backgroundColor = "grey";
  });