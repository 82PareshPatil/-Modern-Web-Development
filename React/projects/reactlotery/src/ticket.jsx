import Tn from "./tn"
import "./ticket.css"

export default function Ticket({ticket}){
   return(
     <div className="ticket">{
       ticket.map((num,ind)=>(
        <Tn  num={num} key={ind}/>
       ))}
  </div>
   )
}
export {Ticket}