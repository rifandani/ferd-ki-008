// make async request using redux-thunk
// halts the dispatch until the async requests done, then continue
export const fetchTodosLegacy = () => async (dispatch, getState) => {
  const response = await fetch("./todos.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();

  dispatch({
    type: "FETCH_TODOS_LEGACY",
    payload: data,
  });
};
