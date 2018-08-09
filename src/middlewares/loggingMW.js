export default function logginMW(store) {
  return next => {
    return action => {
      console.log("before action");
      next(action);
      console.log("after action");
    };
  };
}
