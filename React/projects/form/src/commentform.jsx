export default function Commentform(){
    return(
        <form >
            <label htmlFor="username">Username : </label>
            <input type="text" 
            name="username" 
            id="username" />
            <br />

            <label htmlFor="username">Remark : </label>
            <input type="text" 
            name="remark" 
            id="remark" />
            <br />

            <label htmlFor="username">Rating : </label>
            <input type="number" 
            name="rating" 
            id="rating" 
            min={1}
            max={5}/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}
export {Commentform}