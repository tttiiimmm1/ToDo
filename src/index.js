import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

// ========================================

/**
 * The below is the default way that react inputs
 * everything into the DOM. It selects the element
 * with the id of root and renders our entire app
 * in that element.
 */

ReactDOM.render(<App />, document.getElementById("root"));
