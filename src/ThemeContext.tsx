import { createContext } from "react";

//to createContext we pass initial value and an empty function so it reads like hook
//TS stuff: Within <> we are specifying that first param of createContext is a string and 2nd param is a function which takes in a theme param of type string and return type of function is void
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
