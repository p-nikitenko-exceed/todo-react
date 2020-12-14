import React from "react";
import PropTypes from "prop-types";

import { ToastContainer, toast } from "react-toastify";
import "./../App.css";
import "react-toastify/dist/ReactToastify.css";
// import Header from './Header'
//при наведении на элемент должна появляться кнопка удаления

toast.configure();
function TodoItem({ todo, onChange, deleteTodo, editText }) {
  const [edit, setEdite] = React.useState("false");
  const [title, editTitle] = React.useState("");

  const showInput = (event) => {
    editTitle(event.target.value);
    console.log("state", title);
  };
  let displayElement = "";

  const chengeModeFalse = () => {
    setEdite("false");
  };

  const chengeModeTrue = () => {
    setEdite("true");
  };
  if (edit === "true") {
    displayElement = (
      <input
        type='text'
        defaultValue={todo.text}
        onBlur={chengeModeFalse}
        onChange={showInput}
      />
    );
  } else {
    displayElement = (
      <span
        onDoubleClick={chengeModeTrue}
        style={{
          textDecoration: todo.done ? "line-through" : "",
          color: todo.done ? "gray" : "",
          marginTop: "0.5%",
          fontSize: "30px",

          textIndent: "21px",
        }}>
        {todo.text}
      </span>
    );
  }

  let newText = title;

  const deleteTask = () => {
    toast.error("Task deleted");
  };
  const editTask = () => {
    toast.info("Edit task");
  };

  return (
    <li
      
      className='TodoItems'
      onBlur={() => {
        editText(todo.id, newText);
      }}>
      <div className='TodoItems-checkBox'>
       
        <input id='check' checked hidden
          type='checkBox'
          onChange={() => onChange(todo.id)}
          checked={todo.done}
        />
        <label for='chech' onClick={() => onChange(todo.id)}></label>
      </div>

      <div className='TodoItems-span' onDoubleClick={editTask}> {displayElement}   </div>
      <div className='TodoItems-span-delite'>  <span
        onClick={() => deleteTodo(todo.id)}
        onMouseDown={deleteTask}>
        x</span>   </div>
      
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object,
  onChange: PropTypes.func,
};
export default TodoItem;
