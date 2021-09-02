import React, { useState } from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";

export default function AddModal({ todo, setIsDisplayModal, addFullTodo }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newBody, setNewBody] = useState(todo.body);

  const clearInputs = () => {
    setNewBody("");
    setNewTitle("");
    setIsDisplayModal((prev) => !prev);
  };

  const handleSave = () => {
    addFullTodo(newTitle, newBody);
    clearInputs();
  };

  return (
    <div className="modal-background">
      <div className="modal-card">
        <div className="modal-row1">
          <div className="modal-row1-title">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="title_input"
              placeholder="Title"
            />
          </div>
          <div className="modal-row1-buttons">
            <button
              className="modal-delete-2"
              onClick={() => setIsDisplayModal((prev) => !prev)}
            >
              X
            </button>
          </div>
        </div>

        <div className="modal-row2">
          <textarea
            className="modal-row2-textarea"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            placeholder="Enter more details..."
          />
        </div>

        <div className="modal-row3">
          <p>{todo.timestamp}</p>
        </div>

        <div className="modal-row4">
          <DefaultButton
            type1="modal-done modal-button"
            action={handleSave}
            text="Save"
          />
          <DefaultButton
            type1="modal-delete modal-button"
            action={clearInputs}
            text="Discard"
          />
        </div>
      </div>
    </div>
  );
}
