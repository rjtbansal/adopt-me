//Pet component returning array of Pets
const Pet = () =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Noori"),
    React.createElement("h3", {}, "Skamp"),
  ]);

// below App is a React component being created
const App = () => {
  return React.createElement(
    "div",
    {}, //blank curly braces mean no attributes for div such as id, class, etc
    [
      React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
    ]
  );
  /*above after compilation looks like: 
          <div>
            <h1> Adopt Me! </h1> 
            </div>
          */
};
//below we are rendering our component to the DOM. First argument takes our component and 2nd argument contains
// DOM element where we want to render it
ReactDOM.render(React.createElement(App), document.getElementById("root"));
