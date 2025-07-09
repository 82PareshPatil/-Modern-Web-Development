import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todo, setTodo] = useState([{ task: "The Task Are", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() !== "") {
      setTodo((prev) => [...prev, { task: newTodo, id: uuidv4() }]);
      setNewTodo("");
    }
  };

  const updateNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const deletetask= (id)=>{
    setTodo((pr)=>pr.filter((todo)=>
    todo.id!==id
    ))
  }

  let uppercaseone=(id)=>{
    setTodo((pe)=>pe.map((todo)=>{
      if(todo.id===id)
      {
        return{
          ...todo,task:todo.task.toUpperCase(),
        }
      }
      else{
        return todo;
      }
    }))
  }

  let uppercaseall=()=>{
    setTodo((pe)=>pe.map((todo)=>{
      return{
        ...todo,task:todo.task.toUpperCase()
      }
    }))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTodo}
        onChange={updateNewTodo}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id}><span>{item.task}</span>
          <button onClick={()=>deletetask(item.id)}>Delete</button>
          <button onClick={()=>uppercaseone(item.id)}>Uppercase</button></li>
        ))}
      </ul>
      <button onClick={()=>{uppercaseall()}}>UppercaseAll</button>
    </div>
  );
}

export { Todo };
