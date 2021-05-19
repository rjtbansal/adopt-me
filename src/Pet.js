import React from "react";

//Pet component returning array of Pets
const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);

export default Pet;
