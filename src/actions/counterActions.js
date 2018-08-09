export function incrementAction() {
  console.log("Increment Actions");
  return { type: "INCREMENT" };
}

export function decrementAction() {
  return { type: "DECREMENT" };
}
