import React from "react";

//Pet component returning array of Pets
const Pet = (props) => (
  <div>
    <h2>{props.name}</h2>
    <h3>{props.animal}</h3>
    <h3>{props.breed}</h3>
  </div>
);

export default Pet;
