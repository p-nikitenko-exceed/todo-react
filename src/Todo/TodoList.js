import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
function TodoList({todos,onToggle,deleteTodo}) {
 
 
  return (
    <ul>
     {todos.map(todo =>{
         return <TodoItem todo={todo} 
         key={todo.id}
          onChange={onToggle}
          deleteTodo={deleteTodo}
           />
     })}
     
    </ul>
  );
}

TodoList.prototype ={
    todos: PropTypes.arrayOf(PropTypes.object)
   
}
export default TodoList;
