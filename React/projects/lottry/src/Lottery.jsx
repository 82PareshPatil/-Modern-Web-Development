import { useState } from "react"
import { ran , sum} from "./helper"
import "./Lottery.css"

function Lottery(){
    let [num,setnum]=useState(ran(3))
    let win=sum(num)===15;
    let refresh=()=>{
         setnum(ran(3))
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{num[0]}</span>
                <span>{num[1]}</span>
                <span>{num[2]}</span>
            </div>
            <br />
            <h1>{win?"Congratulation! you win":"try again"}</h1>
            <br /><br /><br />
            <button onClick={refresh}>Buy Ticket</button>
        </div>
    )
}
export {Lottery}