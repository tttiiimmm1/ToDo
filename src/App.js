import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./index.css";

export default function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  return (
    //key for uniquely identifying array items
    <div className="app">
      <AddTodo
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        setAllTodos={setAllTodos}
      />
      <div className="notDoneContainer basicContainer">
        <h1>Todo List</h1>
        <div className="subContainer">
          {allTodos
            .filter((item) => !item.status)
            .map((todo) => (
              <Todo
                text={todo.text}
                key={todo.id}
                status={todo.status}
                listKey={todo.id}
                setAllTodos={setAllTodos}
              />
            ))}
        </div>
      </div>
      <div className="doneContainer basicContainer">
        <h1>Done List</h1>
        <div className="subContainer">
          {allTodos
            .filter((item) => item.status)
            .map((todo) => (
              <Todo
                text={todo.text}
                key={todo.id}
                status={todo.status}
                listKey={todo.id}
                setAllTodos={setAllTodos}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
