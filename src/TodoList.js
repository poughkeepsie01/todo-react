import React from 'react'
import Todo from './Todo.js'


//eto yung list of todos
export default function Todolist({todolist, toggleTodo}) { //tatawagin yung variable in {}
  return (      //variable for this array
   todolist.map(todo =>  //map means kukunin nya yung whole array or obj
     <Todo key={todo.id} todo = {todo} toggleTodo = {toggleTodo}/>
   )
  )
}

