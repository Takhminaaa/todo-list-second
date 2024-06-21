import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChangeInput(event) {
    setValue(event.target.value);
    console.log(value);
  }
  function handleUpdateTodo(id) {
    const currentFind = todos.find((item) => item.id === id);
    const currentFilter = todos.filter((item) => item.id !== id);
    setValue(currentFind.title);
    setTodos(currentFilter);
  }

  function handleDaleteValue(id) {
    let del = todos.filter((e) => e.id !== id);
    setTodos(del);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newValue = {
      id: Math.random().toString(),
      title: value,
      status: false,
    };

    setTodos([...todos, newValue]);

    console.log(todos);

    setValue("");
  }

  return (
    <div className="todo-form">
      <h1>TODO-LIST</h1>

      <TodoForm
        handleSubmit={handleSubmit}
        value={value}
        handleChangeInput={handleChangeInput}
      />
      <TodoList
        todos={todos}
        handleDaleteValue={handleDaleteValue}
        handleUpdate={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
