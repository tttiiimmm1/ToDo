import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./index.css";
import DisplayModal from "./DisplayModal";
import AddModal from "./AddModal";
import { getTimestamp, setToStorage, getFromStorage } from "./helpers";

const initialTodoState = {
  title: "",
  body: "",
  status: false,
  due_date: "",
  timestamp: "",
  id: "",
};

const storedTodos = getFromStorage();

export default function App() {
  const [currentTodo, setCurrentTodo] = useState({});
  const [allTodos, setAllTodos] = useState(storedTodos || []);
  const [displayedTodo, setDisplayedTodo] = useState(initialTodoState);
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [isEditDisplayModal, setIsEditDisplayModal] = useState(false);

  const display = isDisplayModal ? (
    <DisplayModal
      todo={displayedTodo}
      setIsDisplayModal={setIsDisplayModal}
      deleteTodo={() => deleteTodo(displayedTodo)}
      changeStatus={() => changeStatus(displayedTodo)}
      setIsEditDisplayModal={setIsEditDisplayModal}
      setDisplayedTodo={setDisplayedTodo}
    />
  ) : (
    ""
  );
  const addFullTodo = (title, body) => {
    const newTodo = {
      title: title,
      body: body,
      status: false,
      due_date: "",
      timestamp: getTimestamp(),
      id: new Date() + title,
    };
    if (title) {
      setAllTodos((prev) => {
        const newTodos = [...prev, newTodo];
        setToStorage(newTodos);
        return newTodos;
      });
      setDisplayedTodo({});
    }
  };

  const updateTodo = (todo, title, body) => {
    const updatedTodo = {
      ...todo,
      title,
      body,
    };
    setAllTodos((prev) => {
      const removed = prev.filter((item) => item.id !== displayedTodo.id);
      return [...removed, updatedTodo];
    });
    setToStorage(allTodos);
    setDisplayedTodo({});
  };
  const editDisplay = isEditDisplayModal ? (
    <AddModal
      todo={displayedTodo}
      setIsDisplayModal={setIsEditDisplayModal}
      changeStatus={() => changeStatus(displayedTodo)}
      addFullTodo={addFullTodo}
      updateTodo={updateTodo}
      setDisplayedTodo={setDisplayedTodo}
    />
  ) : (
    ""
  );

  const deleteTodo = (todo) => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((item) => {
        if (item.id !== todo.id) newOutput.push(item);
      });
      return newOutput;
    });
    setToStorage(allTodos);
  };

  const changeStatus = (todo) => {
    setAllTodos((prev) => {
      const removed = prev.filter((item) => item.id !== todo.id);
      const updatedTodo = {
        ...todo,
        timestamp: getTimestamp(),
        status: !todo.status,
      };
      return [...removed, updatedTodo];
    });
    setToStorage(allTodos);
  };

  return (
    //key for uniquely identifying array items
    <div className="app">
      <AddTodo
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        setAllTodos={setAllTodos}
        setIsEditDisplayModal={setIsEditDisplayModal}
      />
      {display}
      {editDisplay}
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
