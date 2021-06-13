import { combineReducers } from "redux";
import location from "./location";
import breed from "./breed";
import animal from "./animal";
import theme from "./theme";
/**
 * Reaches out to all reducers such as location and combines them into one consolidated rootReducer
 */
export default combineReducers({
  location,
  breed,
  animal,
  theme,
});
