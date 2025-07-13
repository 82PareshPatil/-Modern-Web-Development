import { useState,useEffect } from "react"

export default function Joke(){
    let [joke,setjoke]=useState({})
    let URL ="https://official-joke-api.appspot.com/random_joke";
    let getjoke=async()=>{
       let response=await fetch(URL);
       let jsonres= await response.json();
       setjoke({setup:jsonres.setup, punchline:jsonres.punchline})
    }
  useEffect(()=>{
       getjoke();
  },[])
    return(
        <div>
            <h4>The Joke Was...</h4>
             <h2>{joke.setup}</h2>
             <h2>{joke.punchline}</h2>
            <button onClick={getjoke}>New</button>
        </div>
    )
}
export {Joke}