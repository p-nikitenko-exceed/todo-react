import React from "react";
import PropTypes from 'prop-types'

// import Header from './Header'
//при наведении на элемент должна появляться кнопка удаления
function TodoItem({ todo,onChange,deleteTodo }) {
    
    const clases = []
    if(todo.done){
      clases.push('complited')
    }

  return (
    <li>
      
      <span className={clases.join(' ')} >
        <input type='checkBox' onChange={()=>onChange(todo.id)}/>
        {todo.text}
        <button onClick={()=>deleteTodo(todo.id)}>x</button>
      </span>
    </li>
  );
}
TodoItem.propTypes = {
    todo: PropTypes.object,
    onChange: PropTypes.func
}
export default TodoItem;
