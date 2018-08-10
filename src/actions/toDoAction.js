export function addToDoAction(task) {
  console.log("adding task", task);
  return (dispatch, state) => {
    dispatch({ type: "ADD_TODO", task: task });
  };
}

export function toggleToDoAction(id) {
  return { type: "TOGGLE_TODO", id: id };
}

export function filterToDoAction(filter) {
  return { type: "FILTER", filter: filter };
}
