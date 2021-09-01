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

  //Allow AddTodo to return on 'Enter' keypress
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit()
    };
  };

  return (
    <div className="inputBox">
      <input 
        value={currentTodo} 
        onChange={handleChange}
        onKeyPress={handleKeypress} />
      <button 
        type="button" 
        onClick={handleSubmit} 
        className="addButton">
        Add
      </button>
    </div>
  );
}