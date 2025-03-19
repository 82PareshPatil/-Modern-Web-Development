let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    
    let i=document.createElement("li");
    i.innerText=inp.value;

    let dlb=document.createElement("button");
    dlb.innerText="delete";
     dlb.classList.add("delete");

    i.appendChild(dlb);
    ul.appendChild(i);
    inp.value="";
})

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
        let lii=event.target.parentElement;
        lii.remove();

    }
})