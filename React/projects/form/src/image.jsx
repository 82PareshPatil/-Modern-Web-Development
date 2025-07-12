import "./image.css"
export default function Image({url}){
    return(
        <div className="image">
            <img src={url} alt="" />
        </div>
    )
}
export {Image}