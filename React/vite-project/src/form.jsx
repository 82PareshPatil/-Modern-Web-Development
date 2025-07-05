function sub(e){
    e.preventDefault();
    console.log("Form Submitted!");
}
function Form(){
    return (
        <form onSubmit={sub}>
            <input type="text" placeholder="name" />
            <button>submit</button>
        </form>
    )
}
export { Form }