import { useState } from "react"

export default function Form(){
    let [fname,setfname]=useState("Paresh")
    let namechange=(e)=>{
       setfname(e.target.value)
    }
    return(
        <form>
            <label  htmlFor="UserName:"> Full Name : &nbsp;    </label>
            <input type="text" 
            placeholder="Enter Your Name"
            value={fname}
            onChange={namechange}
            id="UserName"
            />
        
            <br /><br />
            <button>Submit</button>
        </form>
    )
}
export {Form}