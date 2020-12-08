import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
function TodoList(props) {
  return (
    <ul>
     {props.todos.map(todo =>{
         return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} text={props.textOut}/>
     })}
     
    </ul>
  );
}

TodoList.prototype ={
    todos: PropTypes.arrayOf(PropTypes.object)
}
export default TodoList;
