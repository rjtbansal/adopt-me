//redux store
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  //if redux devtools extension installed trigger them else dont do anything
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
