let gameseq=[];
let userseq=[];
let highscore=[];
let start=false;
let level=0;
let btn=["one","two","three","four"];
let h=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false)
    {
       
        start=true;
        levelup();
    }
})
let st=document.querySelector(".st");
st.addEventListener("click",function(){
    if(start==false)
    {
       
        start=true;
        levelup();
    }
})
function flash(btn)
{
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function levelup()
{
    userseq=[];
    level++;
    h.innerText=`Level ${level}`
    let rannum=Math.floor(Math.random()*4);
    let randx=btn[rannum];
    let ranbtn=document.querySelector(`.${randx}`);
    gameseq.push(randx);
    
    console.log(gameseq);
    flash(ranbtn);
}
function cheakans(idx){
   
   if(userseq[idx]===gameseq[idx])
   {
        if(userseq.length==gameseq.length)
        {
          setTimeout(levelup,1000);
        }
   }
   else{
    let hs=document.querySelector("#hs");
    highscore.push(level);
    let ms=Math.max(...highscore);
    hs.innerText=`High Score: ${ms}`;
    h.innerHTML=`Game Over!<b> Your score is ${level}</b><br> Press any key for restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function()
{
    document.querySelector("body").style.backgroundColor="white";
},150)
    reset();
   }
}
function btnpress(){
   
    let btn=this;
    flash(btn);
    let usern=btn.getAttribute("id");
    userseq.push(usern);
    cheakans(userseq.length-1);
}
let btnall=document.querySelectorAll(".but1");
for(bt of btnall)
{
    bt.addEventListener("click",btnpress);
}
function reset()
{
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}