import React, { useState } from "react";
function Header({ todos, setTodos }) {
  // Function that adds passed text as a todo item
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length, title: `${text}`, completed: false },
    ]);
  };

  const [text, setText] = useState("");

  const onChangeFunc = (e) => {
    setText(`${e.target.value}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return false;
    }
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
          onChange={onChangeFunc}
        />
      </form>
    </div>
  );
}

export default Header;
