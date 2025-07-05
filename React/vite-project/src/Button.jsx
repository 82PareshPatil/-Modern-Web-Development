function ok(){
    console.log("ok")
}

function Button({btext}){
   
    return (
        <div>
         <button onClick={ok}> 
        {btext}
    </button>
    <p></p>
    </div>
)
}
export {Button};