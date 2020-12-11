import shortid from 'shortid'
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

// после добавления первого элемента должен появиться checkbox,по нажатию на который "все task будут отмечаться как выполненные"
// добавление элементов по нажатию  'enter'





function Header(props) {
  
  const [out, setOut] = useState("");
  
  function showInput(event) {
    setOut(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    props.addElement({
    id:shortid.generate(),
    text: out,
    done:false
    })
    setOut('')
    
  }
    
  
  return (
    <form onSubmit={handleSubmit} >
      <input type='checkBox'  onChange={()=>props.doneAll()} />
      
      
      <input type='text' placeholder='add task' onChange={showInput}
        value={out}/>
        <ToastContainer/>
    </form>
  );
}

export default Header;
