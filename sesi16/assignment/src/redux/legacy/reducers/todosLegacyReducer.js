import { nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todosLegacy: [],
};

const todosLegacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_LEGACY":
      return {
        ...state,
        todosLegacy: action.payload,
      };
    case "ADD_BACKLOG_LEGACY":
      return {
        ...state,
        todosLegacy: [
          ...state.todosLegacy,
          {
            text: action.payload,
            id: nanoid(16),
            status: "BACKLOG",
          },
        ],
      };
    case "TAKE_LEGACY":
      return {
        ...state,
        todosLegacy: state.todosLegacy.map((todo) => {
          if (todo.id === action.payload) {
            todo.status = "IN_PROGRESS";
          }
          return todo;
        }),
      };
    case "EVALUATE_LEGACY":
      return {
        ...state,
        todosLegacy: state.todosLegacy.map((todo) => {
          if (todo.id === action.payload) {
            todo.status = "EVALUATION";
          }

          return todo;
        }),
      };
    case "DONE_LEGACY":
      return {
        ...state,
        todosLegacy: state.todosLegacy.map((todo) => {
          if (todo.id === action.payload) {
            todo.status = "DONE";
          }

          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todosLegacyReducer;
