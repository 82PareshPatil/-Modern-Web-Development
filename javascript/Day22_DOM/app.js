let change=document.getElementsByClassName("ph")
// for(let k=0;k<change.length;k++){
//     change[k].src="image/maxresdefault (4).jpg";
// }

// change the style 

let ch=document.querySelectorAll(".explor img");
 
for(let lo=0;lo<ch.length;lo++)
{
    ch[lo].style.height='200px';
}

//change by sibling in li

let ul=document.querySelector('ul')
let li1=ul.children[3];
li1.nextElementSibling.innerText="new Hip-Hop";


//add element
let btn=document.createElement("button");
let p=document.querySelector("p");
let au=document.querySelector("#audio");
btn.innerText="Download";
// au.insertAdjacentElement('beforebegin',btn);
//au.insertAdjacentElement('afterbegin',btn);
p.insertAdjacentElement('afterbegin',btn);
au.insertAdjacentElement('afterend',btn);
au.insertAdjacentElement('beforeend',btn);
p.insertAdjacentElement('beforeend',btn);


// remove element
btn.remove(btn)


