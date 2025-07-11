import { useState } from "react"
import {v4 as uuidv4} from "uuid"

 function Todo(){
    let [todo,settodo]=useState([{task:"Start today", id:uuidv4(), done:false}]);
    let [newtodo,setnewtodo]=useState("");

    let addtask=()=>{
        settodo((pre)=> {
            return ([...pre,{task:newtodo,id:uuidv4(), done:false}])
    })
    setnewtodo("");
    }
    let updateinp=(e)=>{
        setnewtodo(e.target.value);
    }

    let deletetask=(id)=>{
        settodo((pre)=>todo.filter((pre)=>pre.id != id))
    }

    let uppercase=()=>{
        settodo((pre)=>(
            pre.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase()
                }
            })
        ))
    }

    let updateupper=(id)=>{
       settodo((pre)=>(
        pre.map((todo)=>{
            if(todo.id===id)
            {
                return{
                    ...todo, task:todo.task.toUpperCase()
                }
            }
            else{
                return  todo
        
            }
        })
       ))
    }

     let donealltask=()=>{
         settodo((pre)=>pre.map((todo)=>{
             return {
             ...todo,done:true
             }
            
         }))
     }
     let taskdone=(id)=>{
        settodo((pre)=>pre.map((todo)=>{
            if(todo.id===id){
                return {
                    ...todo, done:true
                }
            }
            else{
                return todo
            }
        }))
     }
 
    return(
        <div>
            
            <input type="text" placeholder="Enter a task" name="" id="" value={newtodo} onChange={updateinp}/>
            <button onClick={addtask}>Add task</button>
            <br /><br /><br /><hr />
            <ul>
                {
                    todo.map((todo)=>(
                        <li key={todo.id}><span style={todo.done ? {textDecoration:"line-through"} : {}}>{todo.task}</span> &nbsp; &nbsp;
                        <button onClick={()=>deletetask(todo.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={()=>updateupper(todo.id)}>Upadate</button>
                        &nbsp;&nbsp;
                        <button onClick={()=>taskdone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={uppercase}>Upadate</button>
            <button onClick={donealltask}>All Done</button>
        </div>
    )
}
export  {Todo}