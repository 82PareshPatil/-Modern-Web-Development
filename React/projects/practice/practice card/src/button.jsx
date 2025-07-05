import "./btn.css"
function Button({price}){
    return (
        <div className="btn">
  <button id="btndis">{price<251?"See 50% off":"see"}</button>
  <button style={b}>{price}</button>
  </div>
    )
}
export {Button}