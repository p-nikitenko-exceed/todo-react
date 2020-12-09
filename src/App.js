import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Header from "./Todo/Header";
import Footer from "./Todo/Footer";
import { func } from "prop-types";

// при выполнении любого действия должно появляться уведомление с этим действием

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    
  };

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
   
  }
  // const todoLeft = () => {
  //   setTodos(todos.filter((todo) => !todo.done));
  // };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <Header addElement={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} deleteTodo={deleteTodo} />
      <Footer onChenge={todoLeft} />
    </div>
  );
}

export default App;
