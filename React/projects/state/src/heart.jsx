import { useState } from "react"

function Heart(){
    let [like,issetlike]=useState(false);
    let click=()=>{
        issetlike(!like);
    }
    let style={color:"red"}
    return(
        <>
           <h3 onClick={click}>{
            like==false? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart" style={style}></i>
            }</h3>       
        </>
    )
}
export {Heart}