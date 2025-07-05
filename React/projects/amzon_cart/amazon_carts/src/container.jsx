import { Cart } from "./cart"
import "./container.css"
function Container()
{
     let img1="/p."
    return(
       
        <div className="container">
        
        <Cart title="Logitech MX Master" img="/m.jpeg" p1="800 DPI" p2="5 Programmable Buttons" price1="12,495" price2={8999}/>
         <Cart  title="Apple Pencil (2nd Gen)" img="/p.png" p1="Intuitive Touch Surface" p2="Designed for iPad Pro" price1="11,900" price2={9199}/>
          <Cart  title="Zebronics" img="/h.jpeg" p1="Intuitive Touch Surface" p2="Designed for iPad Pro" price1="15,99" price2={899}/>
           <Cart  title="Petronics Toad" img="/pm.jpeg" p1="Wireless Mouse 2.4GHz" p2="Optical Orientation" price1="5,99" price2={278}/>
        </div>
    )
}
export {Container}