import React from "react";
import "./TodoItems.css";
import { ToastContainer, toast } from "react-toastify";

//после добавления элемента TodoItem в TodoList должна появиться кнопка "clear complited"
// счетчик всегда показывает количество 'undone task'

toast.configure()

function Footer({ filterAll, deleteDoneTodo, filterDone, filterActive }) {
  
  const deleteAllDone=()=>{
    toast('All complete task deleted')
  }
  const all=()=>{
    toast('View all task')
  }
  const active=()=>{
    toast('View only activ task')
  }
  const done=()=>{
    toast('View only completed task')
  }
  
  return (
    <div>
      <button onClick={() => filterAll()} onFocus={all}>all</button>
      <button onClick={() => filterActive()} onFocus={active}>active</button>
      <button onClick={() => filterDone()} onFocus={done}>done</button>
      <button onClick={() => deleteDoneTodo()} onFocus={deleteAllDone}>delete all done </button>
      <ToastContainer/>    
    </div>
  );
}

export default Footer;
