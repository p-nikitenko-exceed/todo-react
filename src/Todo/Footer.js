import React from "react";
import "./TodoItems.css";

//после добавления элемента TodoItem в TodoList должна появиться кнопка "clear complited"
// счетчик всегда показывает количество 'undone task'

function Footer({
  todos,
  filterAll,
  deleteDoneTodo,
  filterDone,
  filterActive,
}) {
  let displayElement = "";
  console.log("hi", todos);
  if (todos.length > 0) {
    displayElement = (
      <div className='Footer-button'>
        <div id='items-left'>{todos.filter((todo) => !todo.done).length} items left</div>
        <button onClick={() => filterAll()}>All</button>
        <button onClick={() => filterActive()}>Active</button>
        <button onClick={() => filterDone()}>Completed</button>
        <button id='delete-all' onClick={() => deleteDoneTodo()}>Clear all completed</button>
      </div>
    );
  } else {
    displayElement = (
      <div className='Footer-button'>
        <div id='items-left'>{todos.filter((todo) => !todo.done).length} items left</div>
        <button onClick={() => filterAll()}>All</button>
        <button onClick={() => filterActive()}>Active</button>
        <button onClick={() => filterDone()}>Completed</button>
      </div>
    );
  }

  return <div className='Footer'>{displayElement}</div>;
}

export default Footer;
