export default function loggingMW(store) {
  return next => {
    return action => {
      console.log("before action");
      next(action);
      console.log("after action");
    };
  };
}
