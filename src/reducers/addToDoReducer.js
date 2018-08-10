let i = 0;
export default function addToDoReducer(prevState = [], action) {
  let newState;

  switch (action.type) {
    case "ADD_TODO":
      newState = [
        ...prevState,
        { id: ++i, text: action.task, isComplete: false }
      ];
      break;
    case "TOGGLE_TODO":
      newState = prevState.map(element => {
        if (element.id === action.id) element.isComplete = !element.isComplete;
      });
      break;
    default:
      newState = [...prevState];
      break;
  }
  console.log("prevState ", prevState);
  console.log("Action ", action.type);
  console.log("newState ", newState);
  return newState;
}
