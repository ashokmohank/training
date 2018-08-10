export default function filterReducer(prevState = "ALL", action) {
  let newState;

  if (action.type === "FILTER") {
    newState = action.filter;
  } else {
    newState = prevState;
  }

  console.log("prevState ", prevState);
  console.log("Action ", action.type);
  console.log("newState ", newState);
  return newState;
}
