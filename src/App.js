import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./index.css";
import DisplayModal from "./DisplayModal";

export default function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [displayedTodo, setDisplayedTodo] = useState({});
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const display = isDisplayModal ? <DisplayModal todo={displayedTodo}/> : "";
  return (
    //key for uniquely identifying array items
    <div className="app">
      <AddTodo
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        setAllTodos={setAllTodos}
      />
      {display}
      <div className="notDoneContainer basicContainer">
        <h1>Todo List</h1>
        <div className="subContainer">
          {allTodos
            .filter((item) => !item.status)
            .map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                setDisplayedTodo = {setDisplayedTodo}
                setAllTodos={setAllTodos}
                setIsDisplayModal={setIsDisplayModal}
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
                todo={todo}
                key={todo.id}
                setDisplayedTodo = {setDisplayedTodo}
                setAllTodos={setAllTodos}
                setIsDisplayModal={setIsDisplayModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
