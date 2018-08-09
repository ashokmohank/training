export default function counterReducer(prevState = { count: 0 }, action) {
  let newState;

  switch (action.type) {
    case "INCREMENT":
      newState = { ...prevState, count: prevState.count + 1 };
      break;
    case "DECREMENT":
      newState = { ...prevState, count: prevState.count - 1 };
      break;
    default:
      newState = { ...prevState };
      break;
  }
  console.log("prevState ", prevState);
  console.log("Action ", action.type);
  console.log("newState ", newState);
  return newState;
}
