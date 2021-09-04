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

  /**
   * Adds a todo to the allTodos state
   * @param {String} title
   * @param {String} body
   * @return void
   */

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

  /**
   * Updates a given todo and replaces it
   * in the allTodos state
   * @param {Object} todo
   * @param {String} title
   * @param {String} body
   * @return void
   */

  const updateTodo = (todo, title, body) => {
    const updatedTodo = {
      ...todo,
      title,
      body,
    };
    setAllTodos((prev) => {
      const removed = prev.filter((item) => item.id !== displayedTodo.id);
      const newTodos = [...removed, updatedTodo];
      setToStorage(newTodos);
      return newTodos;
    });
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

  /**
   * Deletes a given todo from the allTodos state
   * @param {Object} todo
   * @return void
   */

  const deleteTodo = (todo) => {
    setAllTodos((prevTodos) => {
      const newOutput = [];
      prevTodos.forEach((item) => {
        if (item.id !== todo.id) newOutput.push(item);
      });
      setToStorage(newOutput);
      return newOutput;
    });
  };

  /**
   * Changes the status of a given todo from the allTodos state
   * @param {Object} todo
   * @return void
   */

  const changeStatus = (todo) => {
    setAllTodos((prev) => {
      const removed = prev.filter((item) => item.id !== todo.id);
      const updatedTodo = {
        ...todo,
        timestamp: getTimestamp(),
        status: !todo.status,
      };
      setToStorage([...removed, updatedTodo]);
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
