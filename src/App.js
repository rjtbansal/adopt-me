//Pet component returning array of Pets
const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);

// below App is a React component being created
const App = () => {
  return React.createElement(
    "div",
    {}, //blank curly braces mean no attributes for div such as id, class, etc
    [
      React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
      React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'husky'}), //passing props to Pet
      React.createElement(Pet, { name: 'Tommy', animal: 'Cat', breed: 'catlike'}),
      React.createElement(Pet, { name: 'Noorie', animal: 'Dog', breed: 'pomerian'}),
    ]
  );
};
//below we are rendering our component to the DOM. First argument takes our component and 2nd argument contains
// DOM element where we want to render it
ReactDOM.render(React.createElement(App), document.getElementById("root"));
