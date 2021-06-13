//actionCreators take in a param and return correct shape of action
export default function changeTheme(theme) {
  return {
    type: "CHANGE_THEME",
    payload: theme,
  };
}
