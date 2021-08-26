import React from "react";

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
    <>
      <h1>{text}</h1>
      <button type="button" onClick={handleDelete}>
        X
      </button>
    </>
  );
}
