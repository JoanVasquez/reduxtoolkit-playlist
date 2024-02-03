import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";
import { songsReducer } from "./slices/songsSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };
