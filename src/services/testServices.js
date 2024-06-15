import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos/1",
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => ``,
    }),
    getPokemonByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;
