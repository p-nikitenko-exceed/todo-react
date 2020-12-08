import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Header from "./Todo/Header";
import Footer from "./Todo/Footer";
import { func } from "prop-types";

// при выполнении любого действия должно появляться уведомление с этим действием

function App() {
  const [todos, setTodos, setText] = React.useState([
    { id: "1", done: false, text: "hi" },
    { id: "2", done: false, text: "hi hi" },
    { id: "3", done: false, text: "hi hi" },
  ]);

  function textChange({out}) {
    setText(
      todos.map((todo) => {
        if (todo.text !== { out }) {
          todo.text = { out };
        }
        return todo
      })
    );
  }

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

  return (
    <div className='App'>
      <Header />
      <TodoList todos={todos} onToggle={toggleTodo} textOut={textChange} />
      <Footer />
    </div>
  );
}

export default App;
