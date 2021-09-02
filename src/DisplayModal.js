import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";

export default function DisplayModal({
  todo,
  setIsDisplayModal,
  deleteTodo,
  changeStatus,
  setIsEditDisplayModal,
  setDisplayedTodo,
}) {
  const handleDelete = () => {
    deleteTodo();
    setIsDisplayModal((prev) => !prev);
    setDisplayedTodo({});
  };

  const handleChange = () => {
    changeStatus();
    setIsDisplayModal((prev) => !prev);
    setDisplayedTodo({});
  };

  const swapModals = () => {
    setIsDisplayModal((prev) => !prev);
    setIsEditDisplayModal((prev) => !prev);
  };

  const handleClose = () => {
    setIsDisplayModal((prev) => !prev);
    setDisplayedTodo({});
  };

  return (
    <div className="modal-background">
      <div className="modal-card">
        <div className="modal-row1">
          <div className="modal-row1-title">
            <h1>{todo.title}</h1>
          </div>
          <div className="modal-row1-buttons">
            <button className="modal-wip" onClick={swapModals}>
              edit
            </button>
            <button className="modal-delete-2" onClick={handleClose}>
              X
            </button>
          </div>
        </div>

        <div className="modal-row2">
          <p className="modal-row2-text">{todo.body}</p>
        </div>

        <div className="modal-row3">
          <p>{todo.timestamp}</p>
        </div>

        <div className="modal-row4">
          <DefaultButton
            type1="modal-done modal-button"
            action={handleChange}
            text="Done it!"
          />
          <DefaultButton
            type1="modal-delete modal-button"
            action={handleDelete}
            text="Delete"
          />
        </div>
      </div>
    </div>
  );
}
