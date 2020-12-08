import React from "react";
import { useState } from "react";
// после добавления первого элемента должен появиться checkbox,по нажатию на который "все task будут отмечаться как выполненные"
// добавление элементов по нажатию  'enter'
function Header() {
  const [out, setOut] = useState("");

  function showInput(event) {
    setOut(event.target.value);
  }
  function test(event) {
    if (event.keyCode === 13) {
      return showInput();
    }
  }
  return (
    <div>
      <input
        type='text'
        placeholder='add task'
        onChange={showInput}
        onKeyDown={test}
      />
      <h2>{out}</h2>
    </div>
  );
}

export default Header;
