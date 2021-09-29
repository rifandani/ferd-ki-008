import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * todo = { id: string, text: string, status: 'BACKLOG' | 'IN_PROGRESS' | 'EVALUATION' | 'DONE' }
 */

// create the thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("./todos.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = response.json();
  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    count: 0,
    values: [],
  },
  // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library.
  reducers: {
    // payload === Todo[]
    setValues: (state, action) => {
      state.values = action.payload;
      state.count = action.payload.length;
    },
    // payload === todo.text
    addBacklog: (state, action) => {
      state.values.push({
        text: action.payload,
        id: nanoid(16),
        status: "BACKLOG",
      });
      state.count++;
    },
    // payload === todo.id
    take: (state, action) => {
      state.values = state.values.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = "IN_PROGRESS";
        }

        return todo;
      });
    },
    // payload === todo.id
    evaluate: (state, action) => {
      state.values = state.values.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = "EVALUATION";
        }

        return todo;
      });
    },
    // payload === todo.id
    done: (state, action) => {
      state.values = state.values.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = "DONE";
        }

        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // add todos to values array
      state.values = action.payload;
    });
  },
});

// todos selector
export const todosSelector = (state) => state.cart.values;

// todos actions
export const { setValues, addBacklog, take, evaluate, done } =
  todosSlice.actions;

// todos reducer
export default todosSlice.reducer;
