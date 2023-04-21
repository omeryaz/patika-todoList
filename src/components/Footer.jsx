import React from "react";

function Footer({ filter, setFilter, remainingCount, todos, setTodos }) {
  // Function that removes completed todo items
  const clearCompleted = () => {
    const updatedTodos = todos
      .filter((todo) => {
        return !todo.completed;
      })
      .map((todo, i) => {
        return { ...todo, id: i };
      });
    setTodos(updatedTodos);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingCount()}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "All" ? "selected" : null}
            onClick={() => setFilter("All")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === "Active" ? "selected" : null}
            onClick={() => setFilter("Active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === "Completed" ? "selected" : null}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}

export default Footer;
