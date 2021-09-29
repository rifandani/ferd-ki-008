import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "../../../todos.json", does not works
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      // query: () => "", does not works
      // transformResponse: (rawResult) => rawResult.products,
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetTodosQuery } = todosApi;
