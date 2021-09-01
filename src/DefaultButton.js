import React from "react";
import "./index.css";

export default function DefaultButton({ type1, action, text }) {
  return (
    <button className={type1} type="button" onClick={action}>
      {text}
    </button>
  );
}
