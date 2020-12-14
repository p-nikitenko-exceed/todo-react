import shortid from "shortid";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./../App.css";
import "react-toastify/dist/ReactToastify.css";

// после добавления первого элемента должен появиться checkbox,по нажатию на который "все task будут отмечаться как выполненные"
// добавление элементов по нажатию  'enter'
toast.configure()
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
  const allDone=()=>{
    
    toast.warning('All tasks completed',{autoClose:2000})
  }
  const newTask=()=>{
    toast.success('New task',{autoClose:2000})
  }
  let displayElement=''
  if(props.newTodos.length > 0){
    displayElement = (
      <form onSubmit={handleSubmit} >
      <div className='Header-all-done'>
      <input  id='all-done'  type="checkBox"  checked hidden   onChange={() => props.doneAll()} onMouseDown={allDone}/>
      <label for='all-done' onClick={() => props.doneAll()}></label>
      </div>
      
      <div className='Header-input'>
        <input id='input'
          type="text"
          onFocus={newTask}
         placeholder="What needs to be done?"
          onChange={showInput}
          value={out}
        />
      </div>
      
      
    </form>

    )
  }else{
    displayElement=(

      <form onSubmit={handleSubmit} >
     
      
      <div className='Header-input'>
        <input id='input'
          type="text"
          onFocus={newTask}
         placeholder="What needs to be done?"
          onChange={showInput}
          value={out}
        />
      </div>
      
      
    </form>
    )
  }

  return (
    <div className='header'>
      <div className='todos'>todos</div>
      {displayElement}
    </div>
  );
}

export default Header;
