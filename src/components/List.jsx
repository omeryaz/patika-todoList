import React, { useState } from "react";

function List({ todos, setTodos, filter }) {
  // Function and states for enabling editing when a todo item is clicked
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editableTodoText, setEditableTodoText] = useState("");

  const handleLabelClick = (id, title) => {
    setEditableTodoId(id);
    setEditableTodoText(title);
  };

  const handleEditInputChange = (e) => {
    setEditableTodoText(e.target.value);
  };

  const handleEditInputBlur = (id) => {
    setEditableTodoId(null);

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: editableTodoText,
          };
        }
        return todo;
      })
    );
  };

  // Handling individual item toggles
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  // Delete item function
  const destroyTodo = (e) => {
    const updatedTodos = todos
      .filter((todo) => {
        return todo.id !== Number(e.target.id);
      })
      .map((todo, i) => {
        return { ...todo, id: i };
      });
    setTodos(updatedTodos);
  };
  // Filtering for 'Completed', 'Active' and 'All' buttons
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });

  // Rendering the list of todo items
  const renderList = () => {
    return filteredTodos.map((todo) => {
      return (
        <li className={todo.completed ? "completed" : null} key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                handleToggle(todo.id);
              }}
            />
            {/* Editable input when an todo item is clicked */}
            {editableTodoId === todo.id ? (
              <input
                className="new-todo"
                value={editableTodoText}
                onChange={handleEditInputChange}
                onBlur={() => handleEditInputBlur(todo.id)}
                autoFocus
              />
            ) : (
              <label onClick={() => handleLabelClick(todo.id, todo.title)}>
                {todo.title}
              </label>
            )}
            {/* Remove item button */}
            <button
              id={todo.id}
              onClick={destroyTodo}
              className="destroy"
            ></button>
          </div>
        </li>
      );
    });
  };
  // Toggle All state and function
  const [toggledAll, setToggledAll] = useState(false);
  const handleToggleAll = () => {
    const updatedTodos = todos.map((todo) => {
      return { ...todo, completed: !toggledAll };
    });

    setTodos(updatedTodos);
    setToggledAll(!toggledAll);
  };
  return (
    <div className="main">
      {/* Toggle All Checkbox */}
      <input
        type="checkbox"
        className="toggle-all"
        onChange={handleToggleAll}
        checked={toggledAll}
        id="toggAll"
      />
      <label htmlFor="toggAll">Mark all as complete</label>
      {/* List */}
      <ul className="todo-list">{renderList()}</ul>
    </div>
  );
}

export default List;
