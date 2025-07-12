import { useState } from "react"

export default function Commentform(){
    let [formdata,setformdata]=useState({
        username : "",
        remark : "",
        rating : ""
    })
    return(
        <form >
            <label htmlFor="username">Username : </label>
            <input type="text" 
            name="username" 
            id="username" 
            value={formdata.username}
            />
            <br />

            <label htmlFor="username">Remark : </label>
            <input type="text" 
            name="remark" 
            id="remark" 
            value={formdata.remark}
            />
            <br />

            <label htmlFor="username">Rating : </label>
            <input type="number" 
            name="rating" 
            id="rating" 
            min={1}
            max={5}
            value={formdata.rating}
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
}
export {Commentform}