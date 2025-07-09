import { useState } from "react";
import './Todo.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [inp, setInp] = useState("");
  const [tasks, setTasks] = useState([{task:"Do Today", id:uuidv4()}]);

  const handleInputChange = (e) => {
    setInp(e.target.value);
  };

  const addTask = () => {
    if (inp.trim() !== "") {
      setTasks([...tasks, { task: inp, id: uuidv4() }]);
      setInp("");
    }
  };

  const deletei=()=>{
    
  }

  return (
    <div className="app-container">
      <div className="top-section">
        <div className="lottie-wrapper">
          <DotLottieReact
            src="https://lottie.host/7433b7fa-1149-45a1-bf30-9422cf2bd9ac/DPQddW9ckG.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="user-name">Paresh</h2>
        <p className="tasks-done">23 / 54 Tasks</p>
        <h1 className="coin-count">25,982</h1>
        <p className="coin-label">COS coins collected</p>
      </div>

      <div className="todo-body">
        <div className="toggle-section">
          <button className="tab active">Daily habits</button>
          <button className="tab">Goals</button>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add new task..."
            onChange={handleInputChange}
            value={inp}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <hr />
        <p className="task-header">Your task is</p>
        <hr />

        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              <span className="task-text">{t.task}</span>
              <button onClick={deletei }>Delete</button>
              <span className="coin-tag">🪙 30 Coins</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Todo };
