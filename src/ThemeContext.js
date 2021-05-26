import { createContext } from "react";

//to createContext we pass initial value and an empty function so it reads like hook
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
