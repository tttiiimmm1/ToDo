import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./index.css";
import DisplayModal from "./DisplayModal";
import { getTimestamp } from "./helpers";

export default function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [displayedTodo, setDisplayedTodo] = useState({});
  const [isDisplayModal, setIsDisplayModal] = useState(false);

  const display = isDisplayModal ? (
    <DisplayModal
      todo={displayedTodo}
      setIsDisplayModal={setIsDisplayModal}
      deleteTodo={() => deleteTodo(displayedTodo)}
      changeStatus={() => changeStatus(displayedTodo)}
    />
  ) : (
    ""
  );

  const deleteTodo = (todo) => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((item) => {
        if (item.id !== todo.id) newOutput.push(todo);
      });
      return newOutput;
    });
  };

  const changeStatus = (todo) => {
    setAllTodos((prev) => {
      const removed = prev.filter((item) => item.id !== todo.id);
      const updatedTodo = {
        text: todo.text,
        status: !todo.status,
        id: todo.id,
        timestamp: getTimestamp(),
      };
      return [...removed, updatedTodo];
    });
  };

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
                setDisplayedTodo={setDisplayedTodo}
                deleteTodo={() => deleteTodo(todo)}
                changeStatus={() => changeStatus(todo)}
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
                setDisplayedTodo={setDisplayedTodo}
                deleteTodo={() => deleteTodo(todo)}
                changeStatus={() => changeStatus(todo)}
                setIsDisplayModal={setIsDisplayModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
