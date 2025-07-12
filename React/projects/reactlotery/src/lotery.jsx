import { useState } from "react"
import Ticket from "./ticket"
import { ran,sum } from "./helper";
import "./lotery.css"

export default function Lotery({n,iswin}){
    let [ticket,setticket]=useState(ran(n));
    let win=iswin(ticket);
    let refresh=()=>{
        setticket(ran(n))
    }
return(
    <div className="lotery">
        <p>Lottery Game</p>
        <Ticket ticket={ticket} />
        <h2>{win && "Congrats, You Win!"}</h2>
        <button onClick={refresh}>Get Ticket</button>
    </div>
)
}
export {Lotery}