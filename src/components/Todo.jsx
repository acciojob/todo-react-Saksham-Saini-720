import React, { useState } from "react";
import "../styles/App.css"

const Todo = () =>{
    
    let [todo, setTodo] = useState(["study", "sleep"])
    let [newTodo, setNewTodo] = useState("")

    function handleChange(e){
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    function addTodo(){
        let newArr = [...todo, newTodo]
        setTodo(newArr)
    }

    function deleteTodo(todo, index){
        let filterTodo = todo.filter((item, i) => i !== index)
        setTodo(filterTodo)
    }

    return(
        <div className="main">
            <h1>To-Do List</h1>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            {todo.map((work, index) => <div key={index} className="list"><li>{work}</li><button onClick={() => deleteTodo(todo, index)}>Delete</button></div>)}
        </div>
    )
}

export default Todo