import React from "react";
import TodoList from "./TodoList";
//после добавления элемента TodoItem в TodoList должна появиться кнопка "clear complited"
// счетчик всегда показывает количество 'undone task'
function Footer({ deleteDoneTodo,show ,done}) {
  return (
    <div>
      <button>all</button>
      <button onClick={()=>{
        done()
      }} >activ</button>
      <button >done</button>
      
      <button onClick={() => deleteDoneTodo()}>delete all done</button>
    </div>
  );
}

export default Footer;
