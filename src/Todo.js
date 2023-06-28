import React from 'react'
import './app.css';
import './App.js'


export default function todo({todo, toggleTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label>
        <input className="checkbox" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>

        {todo.name}    {/* eto ang kukunin pangdisplay sa webpage*/}
      </label>
      
    </div>
  )
}
