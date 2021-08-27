import React from "react";
//{} -> deconstructor
export default function AddTodo({ currentTodo, setCurrentTodo, setAllTodos }) {
  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  };
  const handleSubmit = () => {
    if (currentTodo !== "") {
      setAllTodos((prevTodo) => [...prevTodo, currentTodo]);
      setCurrentTodo("");
    }     
  };
  return (
    <>
      <input value={currentTodo} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
