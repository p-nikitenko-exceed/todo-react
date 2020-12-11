import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Header from "./Todo/Header";
import Footer from "./Todo/Footer";
import { func } from "prop-types";

// при выполнении любого действия должно появляться уведомление с этим действием

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoFilter, setTodoFilter] = React.useState("all");
  let newTodos = [...todos];

  if (todoFilter === "all") {
    newTodos = todos;
  } else if (todoFilter === "active") {
    newTodos = todos.filter((todo) => !todo.done);
  } else if (todoFilter === "done") {
    newTodos = todos.filter((todo) => todo.done);
  }
    

    

  
  
  console.log("МАССИВ КОТОРЫЙ ДОЛЖЕН ОТРИСОВАТЬ", newTodos);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  let changeAllDone=()=>{setTodos(
    newTodos = todos.map(todo=>{return{...todo,done:!todo.done}})
    
  )
  console.log(newTodos)
  }
  
  let changeFilterActive = () => {
    setTodoFilter("active");
  };
  let changeFilterAll = () => {
    setTodoFilter("all");
  };
  let changeFilterDone = () => {
    setTodoFilter("done");
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

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const deleteAllDoneTodo = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div className='App'>
      <Header addElement={addTodo} doneAll={changeAllDone} all={changeFilterAll}/>
      <TodoList
        todos={newTodos}
        onToggle={toggleTodo}
        deleteTodo={deleteTodo}
        todoFilter={todoFilter}
      />

      <Footer
        deleteDoneTodo={deleteAllDoneTodo}
        filterAll={changeFilterAll}
        filterActive={changeFilterActive}
        filterDone={changeFilterDone}
      />
      
      <div>{todos.filter((todo) => !todo.done).length}</div>
    </div>
  );
}

export default App;
