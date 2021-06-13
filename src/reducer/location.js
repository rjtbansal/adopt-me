//our reducer called location and we are giving an initial default state
//reducers on their own are synchronous. They have to be pure with no side effects
export default function location(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
}

/**
 * every action will always have a type
 *
 * {
 *  type: 'CHANGE_LOCATION',
 *  payload: "Salt Lake City, UT",
 * //payload can also be an object with data
 * payload: {
 * city: '',
 * state: ''
 * }
 * }
 */
