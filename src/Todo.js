import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";
import "./AddTodo.js";

export default function Todo({
  todo,
  deleteTodo,
  changeStatus,
  setIsDisplayModal,
  setDisplayedTodo,
}) {
  const timestampConditional = todo.status ? (
    <h1 className="date-text">{todo.timestamp}</h1>
  ) : (
    ""
  );
  const handleDisplayModal = () => {
    setDisplayedTodo(todo);
    setIsDisplayModal((prev) => !prev);
  };
  return (
    <div className={`task ${todo.status ? "doneStatus" : "undone"}`}>
      <div className="task-text">
        <h1>{todo.text}</h1>
        {timestampConditional}
      </div>
      <div className="task-buttons">
        {todo.status ? (
          <DefaultButton type1="wip" action={changeStatus} text="?" />
        ) : (
          <DefaultButton type1="done" action={changeStatus} text="✓" />
        )}
        <DefaultButton type1="delete" action={deleteTodo} text="X" />
        <DefaultButton type1="delete" action={handleDisplayModal} text="Info" />
      </div>
    </div>
  );
}
