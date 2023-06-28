import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.js'// tatawagin ang todolist
// <TodoList todolist = {todos}/>  prang function na tatawagin pero js
import { v4 as uuidv4 } from 'uuid';
import './app.css';

let LOCAL_STORAGE_KEY = 'todoApp.todos'
 


function App() {
  
  const todoname = useRef()  //to reference whats the value in input box

  const[todos, settodos] = useState([]) //usestate kung saan pwede maglagay ng mga item

 


 useEffect(() => {
    let storedtodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedtodos)  settodos(storedtodos); 
 },[])

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos]) //dependent kung saan kukunin ang data

 
  
  function handleAddTodo(_e){ // e = event
     const name = todoname.current.value
     if (name === '')return
    settodos(prevTodos => { // update and add an items
      return [...prevTodos, {id: uuidv4(), name: name, complete: false }]
    })
    
    todoname.current.value = null // after entering input boxx will be empty
    
  }

  function toggleTodo(id){  //for checking box
    const newtodos = [...todos]
    const todo = newtodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    settodos(newtodos)
  }

  function handleClearTodo(){
    const newTodos = todos.filter(todo => !todo.complete)
    settodos(newTodos)
    
  }



  
 
  return (
    <>
      <div className="gridcontainer"> 
        <article className="head" >MY TO-DO LIST</article>
      
        <div className="list"><TodoList todolist = {todos} toggleTodo = {toggleTodo}/> </div>{/* mga makikita sa page */}
        
        <div className="inputBox"><input className= "inputtodo" ref={todoname} type = "text" placeholder="What to do?"/></div>
        <div className="thingstodo">{todos.filter(todo => !todo.complete).length} left to do</div>
        {/* bracket means a jsx, kung ano makikita sa webpage */}
        <div className="btn1"> <button className="anothertodo"  onClick={handleAddTodo}> Add To-do </button> </div>
        <div className="btn"> <button className="clear"  onClick={handleClearTodo}> clear  </button> </div>
        
       </div>
    </>
  )
}

export default App;
