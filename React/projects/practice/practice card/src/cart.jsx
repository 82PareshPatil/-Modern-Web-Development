import { Button } from "./button"
import "./cart.css"
function Cart({title,subject,price}){
    let sublist=subject.map((f)=><li>{f}</li>);
    let discount=price>251;
    let style = price < 251 ? { backgroundColor: "#353534" } : {};

    return(
       <div className="cart" style={style}>
        <img src="/vite.svg" alt="" />
        <h3>{title}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, totam.</p>
        <ul>
          {sublist}
        </ul>
        <Button price={price}/>
       </div>
    )
}
export {Cart}