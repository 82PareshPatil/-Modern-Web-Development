let h=document.querySelector("h3");
let btn=document.querySelector("button");
let box=document.querySelector(".box");
function randomcolor()
{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
let color=`rgb(${r},${g},${b})`;
return color;
}
btn.addEventListener("click",function()
{
     let rc=randomcolor();
     btn.onclick=h.innerText=rc;
     btn=onclick=box.style.backgroundColor=rc;
});