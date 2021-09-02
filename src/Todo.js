import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";
import "./AddTodo.js";
import { getTimestamp } from "./helpers";


export default function Todo({
  todo,
  setAllTodos,
  setIsDisplayModal,
  setDisplayedTodo,
}) {
  const handleDelete = () => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((todo) => {
        if (todo.id !== todo.listKey) newOutput.push(todo);
      });
      return newOutput;
    });
  };

  const changeStatus = () => {
    setAllTodos((prev) => {
      const removed = prev.filter((todo) => todo.id !== todo.listKey);
      const updatedTodo = {
        todo: todo.text,
        status: !todo.status,
        id: todo.listKey,
        timestamp: getTimestamp(),
      };
      return [...removed, updatedTodo];
    });
  };

  const timestampConditional = todo.status ? (
    <h1 className="date-text">{todo.timestamp}</h1>
  ) : (
    ""
  );
  const handleDisplayModal = () => {
    setDisplayedTodo(todo)
    setIsDisplayModal((prev)=>!prev)
  }
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
        <DefaultButton type1="delete" action={handleDelete} text="X" />
        <DefaultButton type1="delete" action={handleDisplayModal} text="Info" />
      </div>
    </div>
  );
}
