import "./price.css"
function Price({pr1,pr2})
{
    return(
       <div className="price">
        <h3 className="no">{pr1}</h3>
        <h3>{pr2}</h3>
       </div>
    )
}
export {Price}