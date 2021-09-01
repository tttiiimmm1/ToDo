import React from "react";
//{} -> deconstructor
export default function AddTodo({ currentTodo, setCurrentTodo, setAllTodos }) {
  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  };
  const handleSubmit = () => {
    if (currentTodo !== "") {
      const id = new Date() + currentTodo;
      const newTodo = {
        text: currentTodo,
        status: false,
        id,
      };
      setAllTodos((prevTodo) => [...prevTodo, newTodo]);
      setCurrentTodo("");
    }
  };
  return (
    <div className="inputBox">
      <input value={currentTodo} onChange={handleChange} />
      <button type="button" onClick={handleSubmit} className="addButton">
        Add
      </button>
    </div>
  );
}
