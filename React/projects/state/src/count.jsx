import { useState } from "react"

function Count(){

   let [count , setCount]=useState(0);
   let setcCount=() =>{
              setCount(count=>{
                return count +1;
              });
              setCount(count=>{
                return count +1;
              });
         
   }
    return (
        <>
        <h3>{count}</h3>
    <button onClick={setcCount}>Increase Count</button>
</>
)

    
}
export {Count}