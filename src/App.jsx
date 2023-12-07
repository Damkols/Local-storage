import React from "react";
import useStorage from "./hooks/useStorage";
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import EditForm from "./component/EditForm";

const App = () => {
  const [todos, setTodos] = useStorage("react-todo.Todo", []);
  const [previusFocusEl, setPreviusFocusEl] = React.useState(null);
  const [editedTodo, setEditedTodo] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  const addTodo = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const updateTodo = (todo) => {
    setTodos((prevState) =>
      prevState.map((t) => (t.id === todo.id ? { ...t, name: todo.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previusFocusEl.focus();
  };

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
    setPreviusFocusEl(document.activeElement);
  };

  return (
    <div className="container">
      <header>
        <h1>Local Storage Todo List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTodo={editedTodo}
          updateTodo={updateTodo}
          closeEditMode={closeEditMode}
        />
      )}
      <Form addTodo={addTodo} />
      {todos && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
};

export default App;
