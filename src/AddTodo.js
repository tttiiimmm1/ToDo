import React, { useState } from "react";
import DefaultButton from "./DefaultButton";
import { getTimestamp, setToStorage } from "./helpers";
//{} -> deconstructor

export default function AddTodo({ setAllTodos, setIsEditDisplayModal }) {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = () => {
    if (textInput !== "") {
      const id = new Date() + textInput;
      const newTodo = {
        title: textInput,
        body: "",
        status: false,
        id,
        timestamp: getTimestamp(),
      };
      setAllTodos((prevTodo) => {
        const newTodos = [...prevTodo, newTodo];
        setToStorage(newTodos);
        return newTodos;
      });
      setTextInput("");
    }
  };

  //Allow AddTodo to return on 'Enter' keypress
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      return handleSubmit();
    }
  };

  return (
    <div className="inputBox">
      <DefaultButton
        type1="addTodoButton"
        action={() => setIsEditDisplayModal((prev) => !prev)}
        text="Add Todo"
      />
      <DefaultButton type1="addButton" action={handleSubmit} text="Add" />
      <input
        value={textInput}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Quick Add! (Press Enter)"
      />
    </div>
  );
}
