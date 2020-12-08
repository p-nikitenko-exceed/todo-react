import React from "react";
import PropTypes from 'prop-types'
// import Header from './Header'
//при наведении на элемент должна появляться кнопка удаления
function TodoItem({ todo, onChange, }) {
    console.log('todo',todo)
  return (
    <li>
      <input type='checkBox' onChange={()=>{
          onChange(todo.id)
      }}/>
      <span>{todo.text}</span>
    </li>
  );
}
TodoItem.propTypes = {
    todo: PropTypes.object,
    onChange: PropTypes.func
}
export default TodoItem;
