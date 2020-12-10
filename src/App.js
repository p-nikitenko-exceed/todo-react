import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Header from "./Todo/Header";
import Footer from "./Todo/Footer";
import { func } from "prop-types";

// при выполнении любого действия должно появляться уведомление с этим действием

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoFilter, setTodoFilter] = React.useState('all');
  
  let newTodos = [...todos];

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  let changeFilterDone = () => {
    setTodoFilter( 'active' )
    console.log(todoFilter)
  };

  const showDone = () => {
   
    
    if (todoFilter === "all") {
      newTodos =todos
    } else if (todoFilter.todoToShow === "done") {
       newTodos= todos.filter((todo) => todo.done);
    } else if (todoFilter === 'active') {
       newTodos = todos.filter((todo) => !todo.done);
    }
    console.log('МАССИВ КОТОРЫЙ ДОЛЖЕН ОТРИСОВАТЬ',newTodos)
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
      <Header addElement={addTodo} />
      <TodoList
        todos={newTodos}
        onToggle={toggleTodo}
        deleteTodo={deleteTodo}
        done={showDone}
      />

      <Footer deleteDoneTodo={deleteAllDoneTodo} done={showDone} />

      <div>{todos.filter((todo) => !todo.done).length}</div>
      <button onClick={()=>changeFilterDone()}>aaaa</button>
      <button onClick={showDone}>xxx</button>
    </div>
  );
}

export default App;
