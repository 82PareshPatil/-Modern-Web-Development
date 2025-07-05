import { Price } from "./price"
import "./cart.css"
function Cart({title,img,p1,p2,price1,price2}){
    return(
        <div className="cart">
          <h3>{title}</h3>
          <img src={img} alt="" />
          <p>{p1}</p>
          <p>{p2}</p>
          <Price pr1={price1} pr2={price2}/>
        </div>
    )
}
export {Cart}