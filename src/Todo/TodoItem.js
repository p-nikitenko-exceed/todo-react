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
        type="text"
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
          color: todo.done ? "rgb(127, 110, 86)" : "",
          marginTop:"0.5%",
          fontSize:"30px",
          
          textIndent:"21px"
          
          
        }}
      >
        {todo.text}
      </span>
    );
  }

  let newText = title;

  const deleteTask = () => {
    toast("Task deleted");
  };

  return (
    <li
      className="TodoItems"
      onBlur={() => {
        editText(todo.id, newText);
      }}
    >
      <input
        type="checkBox"
        onChange={() => onChange(todo.id)}
        checked={todo.done}
      />
      {displayElement}
      <span
        className="delite"
        onClick={() => deleteTodo(todo.id)}
        onMouseDown={deleteTask}
      >x</span>
      <ToastContainer />
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object,
  onChange: PropTypes.func,
};
export default TodoItem;
