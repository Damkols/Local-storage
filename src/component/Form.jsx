import React from "react";
import { BiPlusCircle } from "react-icons/bi";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name: todo,
      checked: false,
      id: Date.now(),
    });
    setTodo("");
  };
  return (
    <form className="todo" onSubmit={handleSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="todo"
          className="input"
          value={todo}
          onInput={(e) => setTodo(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Todo"
        />
        <label htmlFor="task" className="label">
          Enter Todo
        </label>
      </div>
      <button className="btn" aria-label="Add Todo" type="submit">
        <BiPlusCircle />{" "}
      </button>
    </form>
  );
};

export default Form;
