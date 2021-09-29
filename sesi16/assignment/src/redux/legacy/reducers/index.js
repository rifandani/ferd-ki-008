import { combineReducers } from "redux";

import todosReducer from "./todosReducer";

// combining all reducers
const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
