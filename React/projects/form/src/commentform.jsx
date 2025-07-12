import { useState } from "react"
import "./commentform.css"

export default function Commentform(){
    let [formdata,setformdata]=useState({
        username : "",
        remark : "",
        rating : ""
    })

    let updatevalue=(e)=>{
           setformdata((cur)=>
        {
            return {...cur, [e.target.name] : e.target.value}
        }
        )
    }

   let formsubmit = (e)=>{
    e.preventDefault();
   setformdata({
        username : "",
        remark : "",
        rating : ""
    })
   }

    return(
        <div>


       
        <form onSubmit={formsubmit} className="form">
            <label htmlFor="username">Username : </label>
            <input type="text" 
            name="username" 
            id="username" 
            value={formdata.username}
            onChange={updatevalue}
            />
            <br />

            <label htmlFor="username">Remark : </label>
            <input type="text" 
            name="remark" 
            id="remark" 
            value={formdata.remark}
            onChange={updatevalue}
            />
            <br />

            <label htmlFor="username">Rating : </label>
            <input type="number" 
            name="rating" 
            id="rating" 
            min={1}
            max={5}
            value={formdata.rating}
            onChange={updatevalue}
            />
            <br /><br />
            <button>Submit</button>
        </form>
         </div>
    )
}
export {Commentform}