import React from "react";
import PropTypes from "prop-types";
import "./TodoItems.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import Header from './Header'
//при наведении на элемент должна появляться кнопка удаления

toast.configure()
function TodoItem({ todo, onChange, deleteTodo }) {

  
  const [edit,setEdite]=React.useState({
    title:todo.text,
    mode:false
  })
  console.log('state',edit)
  let displayElement =''
 
  if(edit.mode===true){
    displayElement = <input defaultValue={edit.title}  onChange={()=>{}}/>
  } else{
   displayElement = <span
   style={{
     textDecoration: todo.done ? "line-through" : "",
     color: todo.done ? "rgb(127, 110, 86)" : "",
   }}>
   <input
     type='checkBox'
     onChange={() => onChange(todo.id)}
     checked={todo.done}
   />
   {edit.title}
 </span>
  }
    
  const chengeModeTrue=()=>{
    setEdite(prevState=>({...prevState,mode:true}))
  }
  const chengeModeFalse=(event)=>{
    let text=event.currentTarget.defaultValue
    console.log('text',text)
    setEdite(()=>({title:text,mode:false}))
  }
  const deleteTask=()=>{
    toast('Task deleted')
  }

  return (
    <li className='TodoItems' onDoubleClick={chengeModeTrue} onBlur={chengeModeFalse}>
      {displayElement}
      <span className='delite' onClick={() => deleteTodo(todo.id)} onMouseDown={deleteTask}>x</span>
        <ToastContainer/>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object,
  onChange: PropTypes.func,
};
export default TodoItem;
