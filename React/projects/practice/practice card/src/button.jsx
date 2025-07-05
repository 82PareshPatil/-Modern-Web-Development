import "./btn.css"
function Button({price}){
    return (
        <div className="btn">
  <button>{price<251?"See 50% off":"see"}</button>
  <button>{price}</button>
  </div>
    )
}
export {Button}