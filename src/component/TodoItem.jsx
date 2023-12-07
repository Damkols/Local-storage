import React from "react";

// Import Styles
import styles from "./TodoItem.module.css";

import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const TodoItem = ({ todo, deleteTodo, toggleTodo, enterEditMode }) => {
  const [isChecked, setIsChecked] = React.useState(todo.checked);

  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTodo(todo.id);
  };

  return (
    <li className={styles.todo}>
      <div className={styles["todo-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckBoxChange}
          name={todo.name}
          id={todo.id}
        />
        <label htmlFor={todo.id} className={styles.label}>
          {todo.name}
          <p className={styles.checkmark}>
            <FaCheck />
          </p>
        </label>
      </div>
      <div className={styles["todo-group"]}>
        <button
          className="btn"
          aria-label={`Update ${todo.name} Todo`}
          onClick={() => enterEditMode(todo)}
        >
          <HiMiniPencilSquare />{" "}
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${todo.name} Todo`}
          onClick={() => deleteTodo(todo.id)}
        >
          <IoTrash />{" "}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
