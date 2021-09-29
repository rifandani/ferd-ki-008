import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {};

// using redux-thunk middleware
const middleware = [thunk];

// takes 3 arguments, 1 = root reducer, 2 = initial state, 3 = any middleware
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
