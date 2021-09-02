import React from "react";
import "./index.css";
import DefaultButton from "./DefaultButton.js";
import changeStatus from "./Todo.js";

export default function DisplayModal({todo}) {
  return (
  <div className="modal-background">
    <div className="modal-card">
      <div className="modal-row1">
        <div className="modal-row1-title">
          <h1>{todo.text}</h1>
        </div>
        <div className="modal-row1-buttons">
          <button className="modal-wip">edit</button>
          <button className="modal-delete-2">X</button>
        </div>
      </div>
    
      <div className="modal-row2">
        <p className="modal-row2-text">Body</p>
      </div>
    
      <div className="modal-row3">
        <p>{todo.timestamp}</p>
      </div>
    
      <div className="modal-row4">
        <DefaultButton type1="modal-done" action={changeStatus} text="Done it!"/>
        <DefaultButton type1="modal-delete" action={changeStatus} text="Delete"/>
      </div>
    </div>
  </div>
  )
}
