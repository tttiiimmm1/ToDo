import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";
import "./AddTodo.js";
import { getTimestamp } from "./helpers";

export default function Todo({
  text,
  status,
  listKey,
  timestamp,
  setAllTodos,
}) {
  const handleDelete = () => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((todo) => {
        if (todo.id !== listKey) newOutput.push(todo);
      });
      return newOutput;
    });
  };

  const changeStatus = () => {
    setAllTodos((prev) => {
      const removed = prev.filter((todo) => todo.id !== listKey);
      const updatedTodo = {
        text,
        status: !status,
        id: listKey,
        timestamp: getTimestamp(),
      };
      return [...removed, updatedTodo];
    });
  };

  const timestampConditional = status ? (
    <h1 className="date-text">{timestamp}</h1>
  ) : (
    ""
  );

  return (
    <div className={`task ${status ? "doneStatus" : "undone"}`}>
      <div className="task-text">
        <h1>{text}</h1>
        {timestampConditional}
      </div>
      <div className="task-buttons">
        {status ? (
          <DefaultButton type1="wip" action={changeStatus} text="?" />
        ) : (
          <DefaultButton type1="done" action={changeStatus} text="✓" />
        )}
        <DefaultButton type1="delete" action={handleDelete} text="X" />
      </div>
    </div>
  );
}
