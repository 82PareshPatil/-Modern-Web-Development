let img = document.querySelector(".img1");
let url=("https://dog.ceo/api/breeds/image/random");
fetch(url)
.then((res)=>{
          console.log(res);
          let read=res.json();
          return read;
})
.then((data)=>{
    let rc=data.message;
    console.log(rc);
    img.src=rc;
});

let im=document.querySelector(".img2");
let ul=("https://dog.ceo/api/breeds/image/random");

async function rndi(){
    try{
          let m=await fetch(ul);
      
          let n=await m.json();
     
          let k=n.message
        
          im.src=k;
    }
    catch(e)
    {
        console.log(e);
    }
}
rndi();