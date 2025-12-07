import React, { useState } from "react";
import "../styles/App.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    if (newTodo.trim() === "") return;
    setTodo([...todo, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    setTodo(todo.filter((item, i) => i !== index));
  }

  return (
    <div className="main">

      <h1>To-Do List</h1>

      <div>
        <input 
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* REQUIRED BY CYPRESS */}
      <ul>
        {todo.map((task, index) => (
          <li key={index} className="list">
            <span>{task}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Todo;
