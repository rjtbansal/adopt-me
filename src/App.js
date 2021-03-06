import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// below App is a React component being created
const App = () => {
  const theme = useState("darkblue");
  console.log('theme: ', theme);
  //passing are theme as value to ThemeContext provider which is our context
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
//below we are rendering our component to the DOM. First argument takes our component and 2nd argument contains
// DOM element where we want to render it
//StrictMode component below ensures that React forces us to not use deprecated features. Instead of throwing Warnings it will throw exceptions and force us to comply
//for example attempting to use componentWillMount which is now deprecated
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
