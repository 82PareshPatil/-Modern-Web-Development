import { Button } from "./Button";
import "./cart.css"
function Cart({title,btext,img}){
    return (
        <div className="cart">
        <img src={img} alt="" />
      <h3>{title}</h3>
      <p>Lorem ipsum dolor  amet consectetur adipisicing elit. Ratione, tempora.</p>
      <Button btext={btext}/>
      </div>
    )
}
export {Cart}