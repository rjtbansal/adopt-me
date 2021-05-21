import React from "react"; 
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
//import Pet from "./Pet";

// below App is a React component being created
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="husky" />
      <Pet name="Tommy" animal="Cat" breed="catlike" />
      <Pet name="Noorie" animal="Dog" breed="pomerian" /> */}
      <SearchParams />
    </div>
  );
};
//below we are rendering our component to the DOM. First argument takes our component and 2nd argument contains
// DOM element where we want to render it
ReactDOM.render(<App />, document.getElementById("root"));
