import { useState, useEffect } from "react";
import TodoItem from "../components/todoItem";
import TodoForm from "../components/todoForm";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    const _storageData = localStorage.getItem("todos");
    if (_storageData) {
      setTodos(JSON.parse(_storageData));
    }
  }, []);

  return (
    <div className="container">
      <TodoForm
        todoName={todoName}
        setTodoName={setTodoName}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default Home;
