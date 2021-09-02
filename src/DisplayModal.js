import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";

export default function DisplayModal({
  todo,
  setIsDisplayModal,
  deleteTodo,
  changeStatus,
}) {
  const handleDelete = () => {
    deleteTodo();
    setIsDisplayModal((prev) => !prev);
  };

  return (
    <div className="modal-background">
      <div className="modal-card">
        <div className="modal-row1">
          <div className="modal-row1-title">
            <h1>{todo.text}</h1>
          </div>
          <div className="modal-row1-buttons">
            <button className="modal-wip">edit</button>
            <button
              className="modal-delete-2"
              onClick={() => setIsDisplayModal((prev) => !prev)}
            >
              X
            </button>
          </div>
        </div>

        <div className="modal-row2">
          <p className="modal-row2-text">Body</p>
        </div>

        <div className="modal-row3">
          <p>{todo.timestamp}</p>
        </div>

        <div className="modal-row4">
          <DefaultButton
            type1="modal-done"
            action={changeStatus}
            text="Done it!"
          />
          <DefaultButton
            type1="modal-delete"
            action={handleDelete}
            text="Delete"
          />
        </div>
      </div>
    </div>
  );
}
