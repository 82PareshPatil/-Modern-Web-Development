import { useState } from "react"

export default function Form1(){
    let [formdata,setformdata]=useState({
        username : "",
        password : ""
    })

   let datainsert=(e)=>{
       setformdata((cur)=>{
       return {...cur,[e.target.name]:e.target.value}
       })
   }
   let formsubmit=(e)=>{
       e.preventDefault();
       console.log(formdata);
       setformdata({
        username : "",
        password : ""
    })
   }

    return(
        <form onSubmit={formsubmit}>
            <label htmlFor="uname">User Name : </label>
            <input type="text" 
            placeholder="Enter Username"
            id="uname"
            name="username"
            value={formdata.username}
            onChange={datainsert}
             autoComplete="username" 
            />
            <br />
            <label htmlFor="pass">Password : </label>
            <input type="password" 
            name="password" 
            id="pass" 
            placeholder="****"
            value={formdata.password}
            onChange={datainsert}
             autoComplete="current-password" 
            /><br /><br />
            <button>Submit</button>

        </form>
    )
}
export {Form1}