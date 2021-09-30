import { combineReducers } from "redux";

import todosLegacyReducer from "./todosLegacyReducer";

// combining all reducers
const rootReducer = combineReducers({
  todosLegacy: todosLegacyReducer,
});

export default rootReducer;
