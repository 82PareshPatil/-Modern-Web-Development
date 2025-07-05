function Tag({name,tcolor}){
    let style={color:tcolor};
    return(
        <h1 style={style}>{name}</h1>
    )
}
export {Tag}