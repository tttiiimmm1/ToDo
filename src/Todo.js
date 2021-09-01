import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";
import "./AddTodo.js";

export default function Todo({ text, status, listKey, setAllTodos }) {
  const handleDelete = () => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((todo) => {
        if (todo.id !== listKey) newOutput.push(todo);
      });
      return newOutput;
    });
  };
  const d = new Date();
  const doneDate = d.getFullYear() + '/' + parseInt(d.getMonth()+1) + '/' + d.getDate() + ', ' + d.getHours() + ':' + d.getMinutes();
  const changeStatus = () => {
    setAllTodos((prev) => {
      const removed = prev.filter((todo) => todo.id !== listKey);
      const updatedTodo = {
        text,
        status: !status,
        id: listKey,
        doneDate: d.getFullYear() + '/' + parseInt(d.getMonth()+1) + '/' + d.getDate() + ', ' + d.getHours() + ':' + d.getMinutes(),
      };
      return [...removed, updatedTodo];
    });
  };

  return (
    <div className={`task ${status ? "doneStatus" : "undone"}`}>
      <div className="task-text">
        <h1>{text}</h1>
        <h1 className="date-text">{doneDate}</h1>
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
