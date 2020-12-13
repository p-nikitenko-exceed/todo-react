import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import "./../App.css";
function TodoList({ todos, onToggle, deleteTodo, edit }) {
  return (
    <ul className='TodoList'>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onChange={onToggle}
            deleteTodo={deleteTodo}
            editText={edit}
          />
        );
      })}
    </ul>
  );
}

TodoList.prototype = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
export default TodoList;
