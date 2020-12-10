import React from "react";
import TodoList from "./TodoList";
//после добавления элемента TodoItem в TodoList должна появиться кнопка "clear complited"
// счетчик всегда показывает количество 'undone task'
function Footer({ filterAll, deleteDoneTodo, filterDone, filterActive }) {
  return (
    <div>
      <button onClick={() => filterAll()}>all</button>
      <button onClick={() => filterActive()}>active</button>
      <button onClick={() => filterDone()}>done</button>
      <button onClick={() => deleteDoneTodo()}>delete all done</button>
    </div>
  );
}

export default Footer;
