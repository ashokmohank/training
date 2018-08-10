import axios from "axios";

export function userDetailsAction(url) {
  console.log("url", url);

  return (dispatch, state) => {
    console.log("dispatch", dispatch);
    console.log("state", state);

    dispatch({ type: "IS_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
  //With Redux-thunk middleware, we would be able to return async function instead of object
  // return { type: "TESTING" };
}
