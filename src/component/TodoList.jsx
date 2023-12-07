import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo, enterEditMode }) => {
  return (
    <ul className={styles.todos}>
      {todos
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

export default TodoList;
