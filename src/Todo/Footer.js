import React from "react";
import TodoList from "./TodoList";
//после добавления элемента TodoItem в TodoList должна появиться кнопка "clear complited"
// счетчик всегда показывает количество 'undone task'
function Footer(props) {
  
  return (
    <div >
    
  <span >{props.todo}</span>
  <button onClick={all}></button>
    </div>
  );
}

export default Footer;
