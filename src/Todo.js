import React from "react";
import './index.css';
import DefaultButton from './DefaultButton.js'

export default function Todo({ text, listKey, setAllTodos }) {
  const handleDelete = () => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((todo, i) => {
        if (i !== listKey) newOutput.push(todo);
      });
      return newOutput;
    });
  };
  return (
      <div className="task">
        <div className="task-text">
          <h1>{text}</h1>      
        </div>
        <div className="task-buttons">
          <DefaultButton type1="done" action={handleDelete} text="✓"/>
          <DefaultButton type1="delete" action={handleDelete} text="X"/>
          <DefaultButton type1="wip" action={handleDelete} text="?"/>
        </div>
      </div>
  );
}
