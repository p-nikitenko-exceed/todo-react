import shortid from "shortid";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./../App.css";
import "react-toastify/dist/ReactToastify.css";

// после добавления первого элемента должен появиться checkbox,по нажатию на который "все task будут отмечаться как выполненные"
// добавление элементов по нажатию  'enter'

function Header(props) {
  const [out, setOut] = useState("");

  function showInput(event) {
    setOut(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addElement({
      id: shortid.generate(),
      text: out,
      done: false,
    });
    setOut("");
  };

  return (
    <div className='header'>
    <form onSubmit={handleSubmit}>
      
      <input  id='all-done' type="checkBox" onChange={() => props.doneAll()} />

      <input id='input'
        type="text"
        placeholder="What needs to be done?"
        onChange={showInput}
        value={out}
      />
      <ToastContainer />
    </form>
    </div>
  );
}

export default Header;
