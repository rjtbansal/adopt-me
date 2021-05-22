import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// below App is a React component being created
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
//below we are rendering our component to the DOM. First argument takes our component and 2nd argument contains
// DOM element where we want to render it
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
