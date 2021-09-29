import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
// import { todosApi } from "./slices/todosApi";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;
