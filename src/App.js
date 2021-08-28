import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./index.css";

export default function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  return (
    //key for uniquely identifying array items
    <>
      <AddTodo
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        setAllTodos={setAllTodos}
      />
      {allTodos.map((todo, i) => (
        <Todo text={todo} key={i} listKey={i} setAllTodos={setAllTodos} />
      ))}
    </>
  );
}
