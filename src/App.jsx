import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: "Learn Javascript", completed: true },
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Have a life!", completed: false },
  ]);
  // Function that counts the uncompleted todo items
  const remainingCount = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) {
        count++;
      }
    });
    return count;
  };
  const [filter, setFilter] = useState("All");
  return (
    <div className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
      <Footer
        filter={filter}
        setFilter={setFilter}
        remainingCount={remainingCount}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
