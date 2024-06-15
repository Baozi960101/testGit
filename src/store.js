import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./services/testServices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
